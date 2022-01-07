const path = require('path');
const fs = require('fs');

const currentPath = path.resolve(__dirname, '../suixintui/dist/js');


fs.readdir(currentPath, function (err, files) {
  const totalcount = files.reduce((total, val)=> {
    if(/\.map$/.test(val)) {
      const file = fs.statSync(`${currentPath}/${val}`); 
      total += file.size/1000
    }
    return total;
  }, 0)
  console.log(totalcount+'kb', 'totalcount')
})

