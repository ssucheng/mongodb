// 引入数据库模块
const mongoose = require('mongoose');
const options ={
     useNewUrlParser: true ,
     seUnifiedTopology: true
}
// 连接数据库
mongoose.connect('mongodb://localhost/dataArray',options)
    .then(() => console.log('数据库连接成功'))
    .catch(() => console.log('数据库连接失败'))
// 创建集合规则
const courseSchema = new mongoose.Schema({
    name:String,
    author:String,
    isPublished:Boolean
});
// 创建集合     返回的是个构造函数    mongoose.model()第一个参数首字母要大写 
const Course = mongoose.model('Course',courseSchema); // courses

const course = new Course({
    name:'sucheng',
    author:'愤怒的SC',
    isPublished:true
});
// 以上都不能在数据库中创建一个库 因为没有插入进去  
//通过下面这行命令完成创建
course.save();