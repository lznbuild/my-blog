## 怎么修改npm包

### patch-package
npm i patch-package --save-dev

修改node_modules下的文件

执行 npx patch-package antd 生成补丁文件（patch-package会将当前node_modules下的源码与原始源码进行git diff，并在项目根目录下生成一个patch补丁文件）


其他人拉代码 在npm install后执行patch-package命令即可

### webpack alias 替换自己项目中的内容，重写
