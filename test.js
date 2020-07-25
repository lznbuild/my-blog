const fs = require('fs');

fs.mkdir('./test', (err) => {
  if (err) {
    console.log(err);
    return 
  }

  console.log('创建成功');
})