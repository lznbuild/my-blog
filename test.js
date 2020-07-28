const inquirer = require('inquirer')

const promptList = [{
    type: 'input',
    message: '设置一个用户名:',
    name: 'name',
    default: "test_user" // 默认值
},{
    type: 'input',
    message: '请输入手机号:',
    name: 'phone',
    validate: function(val) {
        if(val.match(/\d{11}/g)) { // 校验位数
            return val;
        }
        return "请输入11位数字";
    }
}];


// inquirer.prompt(promptList).then(answers => {
//   console.log(answers,'结果'); // 返回的结果
// });
console.log(process.env.NODE_ENV);