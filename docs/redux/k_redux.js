var arr = [fn1,fn2,fn3];

function fn1() {
  console.log(
    'fn1'
  );
}

function fn2() {
  console.log(
    'fn2'
  );
}

function fn3() {
  console.log(
    'fn3'
  );
}

let a = arr.reduce((left, right) => {
  return right(left())
})

console.log(a);
