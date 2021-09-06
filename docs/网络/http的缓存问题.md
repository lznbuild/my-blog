## 浏览器资源缓存的过程


 浏览器发起请求,先去硬盘或者内存查看有没有对应缓存，如果没有，向服务器请求，可能会缓存这个资源（通过响应头的字段判断是否缓存），加载对应资源；如果有对应缓存，判断是否过期，没有过期，就加载资源，不再请求；过期了，向服务器发起验证，判断资源是否有效，有效服务端接口http状态为304，不带资源的，资源仍然加载缓存的，会把过期时间修改了；资源无效了，请求带回新的资源，可能会缓存这个资源，加载。


### 内存缓存(from memory cache)
内存缓存具有两个特点，分别是快速读取和时效性：

- 快速读取：内存缓存会将编译解析后的文件，直接存入该进程的内存中，占据该进程一定的内存资源，以方便下次运行使用时的快速读取。

- 时效性：一旦该进程关闭，则该进程的内存则会清空。

### 硬盘缓存(from disk cache)
硬盘缓存则是直接将缓存写入硬盘文件中，读取缓存需要对该缓存存放的硬盘文件进行I/O操作，然后重新解析该缓存内容，读取复杂，速度比内存缓存慢。

在浏览器中，浏览器会在js和图片等文件解析执行后直接存入内存缓存中，那么当刷新页面时只需直接从内存缓存中读取(from memory cache)；而css文件则会存入硬盘文件中，所以每次渲染页面都需要从硬盘读取缓存(from disk cache)。


## 强缓存，协商缓存 

### 强缓存  
强制缓存不需要再和服务器发生交互。由 pragma, cache-control ,expires属性控制。  

Expires 的值是一个 HTTP 日期，在浏览器发起请求时，会根据系统时间和 Expires 的值进行比较，如果系统时间超过了 Expires 的值，缓存失效。由于和系统时间进行比较，所以当系统时间和服务器时间不一致的时候，会有缓存有效期不准的问题。Expires 的优先级是最低的。



当服务器返回 HTTP 响应头给浏览器时，浏览器是通过响应头中的 Cache-Control 字段（http1.1标准中的，http1.0标准中用pragma）来设置是否缓存该资源。通常，我们还需要为这个资源设置一个缓存过期时长，而这个时长是通过 Cache-Control 中的 Max-age 参数来设置的。

### cache-control
在请求头和响应头中都可以使用  
| 值 | 描述 |
| ------ | ------ |
| private | 客户端可以缓存 | 
| public | 客户端和代理服务器都可缓存（前端的同学，可以认为public和private是一样的） |
| max-age=xxx |  缓存的内容将在 xxx 秒后失效 | 
| no-cache | 需要使用协商缓存来验证缓存数据 | 
| no-store | 所有内容都不会缓存，强制缓存，协商缓存都不会触发 | 

Pragma 只有一个属性值，就是 no-cache ，效果和 Cache-Control 中的 no-cache 一致，不使用强缓存，需要与服务器验证缓存是否新鲜，在 3 个头部属性中的优先级最高。

### 协商缓存  
当浏览器的强缓存失效的时候或者请求头中设置了不走强缓存，并且在请求头中设置了If-Modified-Since(最后修改时间) 或者 If-None-Match 的时候，会将这两个属性值到服务端去跟资源最后修改时间做对比，如果命中了协商缓存，会返回 304 状态，加载浏览器缓存，并且响应头会设置 Last-Modified(最后修改时间) 或者 ETag 属性。


 Last-Modified （服务器给前端的资源最后修改时间）  
 If-Modified-Since  （前端给后端的，就是前面的那个最后修改时间）  

有个问题，如果一个资源在缓存时间已过了，但是资源没有被修改过，这样的资源走协商缓存的话，会再一次从后端发送到前端，这也是一种浪费。  


```js
const express = require('express');
const app = express();
var options = { 
  etag: true, // 开启协商缓存
  lastModified: true, // 开启协商缓存
  setHeaders: (res, path, stat) => {
    res.set({
      'Cache-Control': 'max-age=00', // 浏览器不走强缓存
      'Pragma': 'no-cache', // 浏览器不走强缓存
    });
  },
};
app.use(express.static((__dirname + '/public'), options));
app.listen(3001);
```

ETag 是服务器根据当前文件的内容，给文件生成的唯一标识，只要里面的内容有改动，这个值就会变。服务器通过响应头把这个值给浏览器。
浏览器接收到ETag的值，会在下次请求时，将这个值作为If-None-Match这个字段的内容，并放到请求头中，然后发给服务器。
服务器接收到If-None-Match后，会跟服务器上该资源的ETag进行比对:

如果两者不一样，说明要更新了。返回新的资源，跟常规的HTTP请求响应的流程一样。
否则返回304，告诉浏览器直接用缓存。

```js
http.createServer(function(req, res) {
    let { pathname } = url.parse(req.url, true);
    console.log(pathname)
    let abs = path.join(__dirname, pathname);
    fs.stat(path.join(__dirname, pathname), (err, stat) => {
      if(err) {
        res.statusCode = 404;
        res.end('Not Found')
        return
      }
      if(stat.isFile()) {
        //Etag 实体内容，他是根绝文件内容，算出一个唯一的值。
        let md5 = crypto.createHash('md5')
        let rs = fs.createReadStream(abs)
        let arr = []; // 你要先写入响应头再写入响应体
        rs.on('data', function(chunk) {
          md5.update(chunk);
          arr.push(chunk)
        })

        rs.on('end', function() {
          let etag = md5.digest('base64');
          if(req.headers['if-none-match'] === etag) {
            console.log(req.headers['if-none-match'])
            res.statusCode = 304;
            res.end()
            return
          }
          res.setHeader('Etag', etag)
          // If-None-Match 和 Etag 是一对， If-None-Match是浏览器的， Etag是服务端的
          res.end(Buffer.concat(arr))
        })
      }
    })
  }).listen(3000)

```

浏览器地址栏中写入URL，回车，浏览器发现缓存中有这个文件了，不用继续请求了，直接去缓存拿（最快）  

F5就是告诉浏览器，别偷懒，好歹去服务器看看这个文件是否有过期了。于是浏览器就发送一个请求带上If-Modified-Since  

Ctrl+F5告诉浏览器，你先把你缓存中的这个文件给我删了，然后再去服务器请求个完整的资源文件下来。于是客户端就完成了强行更新的操作  



两类缓存规则可以同时存在，强制缓存优先级高于协商缓存，也就是说，当执行强制缓存的规则时，如果缓存生效，直接使用缓存，不再执行协商缓存规则。

在精准度上，ETag优于Last-Modified。优于 ETag 是按照内容给资源上标识，因此能准确感知资源的变化。而 Last-Modified 就不一样了，它在一些特殊的情况并不能准确感知资源变化，主要有两种情况:


编辑了资源文件，但是文件内容并没有更改，这样也会造成缓存失效。
Last-Modified 能够感知的单位时间是秒，如果文件在 1 秒内改变了多次，那么这时候的 Last-Modified 并没有体现出修改了。


在性能上，Last-Modified优于ETag，也很简单理解，Last-Modified仅仅只是记录一个时间点，而 Etag需要根据文件的具体内容生成哈希值。

另外，如果两种方式都支持的话，服务器会优先考虑ETag。



## 总结
缓存分为强缓存和协商缓存 

强缓存：不会向服务器发送请求，直接从缓存中读取资源，每次访问本地缓存直接验证看是否过期，通过expires过期时间，cache-control缓存控制  

协商缓存：协商缓存命中，服务器会将这个请求返回304，通过Last-Modified（后端给前端）/If-Mondified-since（前端给后端）或者 ETag（后端给前端）， If-None-Match（前端给后端） 控制

强缓存优于协商缓存进行，expires和cache-contrl生效则直接使用缓存。 

etag适合重要量小的资源，last modify适合不重要的量大的资源。注意last modify需要保证服务器时间准确

https://juejin.im/post/5eb7f811f265da7bbc7cc5bd

https://juejin.im/post/5df5bcea6fb9a016091def69


https://mp.weixin.qq.com/s/6Cmwf9pd6zEccc7iVF55rA