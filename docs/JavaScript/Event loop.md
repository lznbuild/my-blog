async function fn(){
	await console.log(1)
  	console.log(2)
}

new Promise((res)=>{
  console.log(3)
  res(4)
}).then(res=>console.log(res))
fn()

// 3 1 4 2

await 后面到底是个什么执行顺序？？？跟微队列的执行顺序哪个靠前？？？