### Three的三大场景

##### 1 场景
 场景是所有物体的容器，如果要显示一个苹果，就需要将苹果对象加入场景中
##### 2 相机
相机决定了场景中那个角度的景色会显示出来。相机就像人的眼睛一样，人站在不同位置，抬头或者低头都能够看到不同的景色。
Three有很多中相机 
 > 透视相机（THREE.PerspectiveCamera）

##### 3 渲染器
渲染器决定了渲染的结果应该画在页面的什么元素上面，并且以怎样的方式来绘制

``` javascript
  var scene = new THREE.Scene();  // 场景
  var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);// 透视相机
  var renderer = new THREE.WebGLRenderer();   // 渲染器
  renderer.setSize(window.innerWidth, window.innerHeight);    // 设置渲染器的大小为窗口的内宽度，也就是内容区的宽度
  document.body.appendChild(renderer.domElement); 

``` 

  ##### 4 添加物体到场景中
``` javascript
var geometry = new THREE.CubeGeometry(1,1,1); 
var material = new THREE.MeshBasicMaterial({color: 0x00ff00});
var cube = new THREE.Mesh(geometry, material); 
scene.add(cube);
```
 ##### 5 渲染
  ``` javascript
 render( scene, camera, renderTarget, forceClear )

 各个参数的意义是：
 scene：前面定义的场景
 camera：前面定义的相机
 renderTarget：渲染的目标，默认是渲染到前面定义的render变量中
 forceClear：每次绘制之前都将画布的内容给清除，即使自动清除标志autoClear为false，也会清除。

 ```

 ##### 6 渲染循环
渲染有两种方式：实时渲染和离线渲染 。

> 离线渲染，想想《西游降魔篇》中最后的佛主，他肯定不是真的，是电脑渲染出来的，其画面质量是很高的，它是事先渲染好一帧一帧的图片，然后再把图片拼接成电影的。这就是离线渲染。如果不事先处理好一帧一帧的图片，那么电影播放得会很卡。CPU和GPU根本没有能力在播放的时候渲染出这种高质量的图片。

> 实时渲染：就是需要不停的对画面进行渲染，即使画面中什么也没有改变，也需要重新渲染。


###  二 坐标系
#### 如何显示坐标系
``` javascript
var axisHelper = new THREE.AxisHelper(250);
scene.add(axisHelper);
```
### 三 如何让鼠标控制物体动起来
 两种方式都需要引入examples/js/controls/OrbitControls.js文件

1 第一种
```javascript
 function render() {
            renderer.render(scene, camera);//执行渲染操作
            // mesh.rotateZ(0.01);
            // mesh.rotateY(0.01);
            // mesh.rotateX(0.01);
            requestAnimationFrame(render)
  }
 render()
 var controls = new THREE.OrbitControls(camera, renderer.domElement);//创建控件对象

```
2 第二种
```javascript
//创建控件对象
  var controls = new THREE.OrbitControls(camera, renderer.domElement);
   controls.addEventListener('change', render);//监听鼠标、键盘事件

```


### 二 点线面

##### 1.点

``` javascript
var point1 = new THREE.Vecotr3(4,8,9);
point1.set(4,8,9);
```
##### 2.线

``` javascript

//类型数组创建顶点数据
 var vertices = new Float32Array([
            0, 0, 0, //顶点1坐标
            50, 0, 0, //顶点2坐标
            0, 100, 0, //顶点3坐标
            0, 0, 10, //顶点4坐标
            0, 0, 100, //顶点5坐标
            50, 0, 10, //顶点6坐标
 ]);
 var geometry = new THREE.BufferGeometry(); //创建一个Buffer类型几何体对
// 创建属性缓冲区对象
var attribue = new THREE.BufferAttribute(vertices, 3); //3个为一组，表示一个顶点的xyz坐标
// 设置几何体attributes属性的位置属性
geometry.attributes.position = attribue;
 var material=new THREE.LineBasicMaterial({
    color:0xff0000 //线条颜色
});//材质对象
var line=new THREE.Line(geometry,material);//线条模型对象
scene.add(line);//线条对象添加到场景中
```

##### 3.面(网格)
```javascript
var geometry = new THREE.BoxGeometry(100, 100, 100);
// 三角形面渲染模式  
var material = new THREE.MeshLambertMaterial({
  color: 0x0000ff, //三角面颜色
}); //材质对象
var mesh = new THREE.Mesh(geometry, material); //网格模型对象Mesh

```

#### 克隆点线面
##### 第一种
```javascript
//点克隆
var p1 = new THREE.Vector3(1.2,2.6,3.2);
var p2 = new THREE.Vector3(0.0,0.0,0.0);
p2.copy(p1)
// p2向量的xyz变为p1的xyz值
console.log(p2);
//线克隆
var geometry1 = new THREE.BufferGeometry();
var geometry1 = new THREE.BufferGeometry();
var vertices = new Float32Array([
            0, 0, 0, //顶点1坐标
            80, 0, 0, //顶点2坐标
            80, 80, 0, //顶点3坐标
            0, 80, 0, //顶点4坐标
]);
// 创建属性缓冲区对象
var attribue = new THREE.BufferAttribute(vertices, 3); //3个为一组
            // 设置几何体attributes属性的位置position属性
geometry1.attributes.position = attribue
var material = new THREE.LineBasicMaterial({
     color: 0x0000ff
});
var line = new THREE.Line(geometry1, material);
var line1 = line.clone()
line.scale.set(2, 1, 2)
line.translateX(100)
scene.add(line, line1);
//面克隆
var box=new THREE.BoxGeometry(10,10,10);//创建一个立方体几何对象
var material=new THREE.MeshLambertMaterial({color:0x0000ff});//材质对象

var mesh=new THREE.Mesh(box,material);//网格模型对象
var mesh2 = mesh.clone();//克隆网格模型
mesh.translateX(20);//网格模型mesh平移

scene.add(mesh,mesh2);//网格模型添加到场景中
```
##### 第二种
```javascript
//点克隆
 var p1 = new THREE.Vector3(1.2,2.6,3.2);
 var p2 = p1.clone();
// p2对象和p1对 象xyz属性相同
console.log(p2);
```

### 光源对象 --光源对象可以叠加使用（比如使用环境光和点光源）
 #### 1 环境光 :没有特定的方向,主要是均匀整体改变Threejs物体表面的明暗效果，这一点和具有方向的光源不同，比如点光源可以让物体表面不同区域明暗程度不同,物体只有全部明暗的区别 不会个别地方更亮
 ```javascript
 //环境光:环境光颜色RGB成分分别和物体材质颜色RGB成分分别相乘
var ambient = new THREE.AmbientLight(0x444444);
//环境光：颜色设置为`0xffffff`,强度系数设置为0.5 默认1.0
//var ambient = new THREE.AmbientLight(0xffffff,0.5);
scene.add(ambient);//环境光对象添加到scene场景中
}); //材质对象
 ```
 #### 2 点光源 :光线沿着发光核心向外发散，同一平面的不同位置与点光源光线入射角是不同的，点光源照射下，同一个平面不同区域是呈现出不同的明暗效果
 ```javascript
 var point = new THREE.PointLight(0xffffff);
//设置点光源位置，改变光源的位置
point.position.set(400, 200, 300);
scene.add(point);
 ```
 #### 3 平行光 :光线平行，对于一个平面而言，平面不同区域接收到平行光的入射角一样
 ```javascript
var directionalLight = new THREE.DirectionalLight(0xffffff, 1);
// 设置光源的方向：通过光源position属性和目标指向对象的position属性计算
directionalLight.position.set(80, 100, 50);
// 方向光指向对象网格模型mesh2，可以不设置，默认的位置是0,0,0
directionalLight.target = mesh2;
scene.add(directionalLight);
// 设置用于计算阴影的光源对象
 directionalLight.castShadow = true;
 // 设置计算阴影的区域，最好刚好紧密包围在对象周围
 // 计算阴影的区域过大：模糊  过小：看不到或显示不完整
directionalLight.shadow.camera.near = 0.5;
directionalLight.shadow.camera.far = 300;
directionalLight.shadow.camera.left = -50;
directionalLight.shadow.camera.right = 50;
directionalLight.shadow.camera.top = 200;
directionalLight.shadow.camera.bottom = -100;
// 设置mapSize属性可以使阴影更清晰，不那么模糊
// directionalLight.shadow.mapSize.set(1024,1024)
 ```
 #### 3 聚光源 :是一个沿着特定方会逐渐发散的光源，照射范围在三维空间中构成一个圆锥体。通过属性.angle可以设置聚光源发散角度，聚光源照射方向设置和平行光光源一样是通过位置.position和目标.target两个属性来实现
 ```javascript
var spotLight = new THREE.SpotLight(0xffffff);
// 设置聚光光源位置
spotLight.position.set(200, 200, 200);
// 聚光灯光源指向网格模型mesh2
spotLight.target = mesh2;
// 设置聚光光源发散角度
spotLight.angle = Math.PI / 6
scene.add(spotLight);//光对象添加到scene场景中

 // 设置用于计算阴影的光源对象
spotLight.castShadow = true;
 // 设置计算阴影的区域，注意包裹对象的周围
spotLight.shadow.camera.near = 1;
spotLight.shadow.camera.far = 300;
spotLight.shadow.camera.fov = 20;
 ```

### 三 组合

##### 1.group

 ```javascript
        var geometry = new THREE.BoxGeometry(20, 20, 20);
        var material = new THREE.MeshLambertMaterial({ color: 0x0000ff });
        var group = new THREE.Group();
        var mesh1 = new THREE.Mesh(geometry, material);
        var mesh2 = new THREE.Mesh(geometry, material);
        mesh2.translateX(25);
        //把mesh1型插入到组group中，mesh1作为group的子对象
        group.add(mesh1);
        //把mesh2型插入到组group中，mesh2作为group的子对象
        group.add(mesh2);
        //把group插入到场景
        scene.add(group);
        group.remove(mesh1)
        // 一次删除场景中多个对象
        scene.remove(group,group2)`

 ```
 name属性 
 group.name='头部'
 mesh2.name='眼睛'
 #### 2.遍历:.traverse()
```javascript
scene.traverse(function(obj) {
  if (obj.type === "Group") {
    console.log(obj.name);
  }
  if (obj.type === "Mesh") {
    console.log('  ' + obj.name);
    obj.material.color.set(0xffff00);
  }
  if (obj.name === "左眼" | obj.name === "右眼") {
    obj.material.color.set(0x000000)
  }
  // 打印id属性
  console.log(obj.id);
  // 打印该对象的父对象
  console.log(obj.parent);
  // 打印该对象的子对象
  console.log(obj.children);
})

```

 #### 2.查找:
```javascript
// 遍历查找scene中复合条件的子对象，并返回id对应的对象
var idNode = scene.getObjectById ( 4 );
console.log(idNode);
// 遍历查找对象的子对象，返回name对应的对象（name是可以重名的，返回第一个）
var nameNode = scene.getObjectByName ( "左腿" );
nameNode.material.color.set(0xff0000);
  
```

### 四 世界坐标系和本地坐标系

##### 1.世界坐标系
```javascript
// 声明一个三维向量用来保存世界坐标
var worldPosition = new THREE.Vector3();
// 执行getWorldPosition方法把模型的世界坐标保存到参数worldPosition中
mesh.getWorldPosition(worldPosition);
```
#### 2.本地坐标系
```javascript
var mesh = new THREE.Mesh(geometry, material);
// mesh的本地坐标设置为(50, 0, 0)
mesh.position.set(50, 0, 0);
var group = new THREE.Group();
// group本地坐标设置和mesh一样设置为(50, 0, 0)
// mesh父对象设置position会影响得到mesh的世界坐标
group.position.set(50, 0, 0);
group.add(mesh);
scene.add(group);

// .position属性获得本地坐标
console.log('本地坐标',mesh.position);

```
### 五 几何体对象

#### 1.几何体-见几何模型图片

#### 2.曲面:曲线和几何体同样本质上都是用来生成顶点的算法，曲线主要是按照一定的规则生成一系列沿着某条轨迹线分布的顶点




