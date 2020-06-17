// 引入mongoose模块
const mongoose = require('mongoose');
// 定义一个对象让终端 不在提示信息
const options ={
    useNewUrlParser: true ,
    useUnifiedTopology: true
}
// 连接数据库
mongoose.connect('mongodb://localhost/dataArray',options)
    .then(() => console.log('数据库连接成功'))
    .catch(() => console.log('数据库连接失败'))
// 创建规则
const CourseSchma = new mongoose.Schema({
    name:String,
    author:String,
    isPublished:Boolean
});
// 创建集合   Course 是个构造函数
const Course = mongoose.model('Course',CourseSchma);
// 插入文档
Course.create({name:'yangruhu',author:'zhengfu',isPublished:true})
    .then((doc) => console.log(doc))
    .catch((err) => console.log(err))

