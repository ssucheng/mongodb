// 引入数据库模块
const mongoose = require('mongoose');
const options ={
     useNewUrlParser: true ,
     useUnifiedTopology: true
}
// 连接数据库
mongoose.connect('mongodb://localhost/dataArray',options)
    .then(() => console.log('数据库连接成功'))
    .catch(() => console.log('数据库连接失败'))

// 创建集合规则
const userSchema = new mongoose.Schema({
    name:String,
    age:Number,
    hobbies:Array,
    email:String,
    password:Number
});
const User = mongoose.model('User',userSchema);
// 这个时候就可以使用net start MongoDB和net stop MongoDB来启动跟关闭mongo服务了。 (这个是开启关闭服务 与03，js  无关)

// 导入json数据到数据库   mongoimport  需要配置环境变量  电脑属性 高级 环境变量 path 添加 mongoimport 文件目录 到binne   
// 导入数据命令：mongoimport -h dbhost -d dbname -c collectionname 文件的地址…

// -h ： 数据库地址，MongoDB 服务器所在的 IP 与 端口，如 localhost:27017

// -d ：指明使用的库，指明使用的数据库实例，如 test

// -c ：指明要导入的集合，如 c1、c2、可以和导出时不一致，自定义即可，不存在时会直接创建。
// -u 数据库账号
// -p 数据库密码
// –drop 删除原集合的数据
// 本地的文件地址：事先导出好的 mongoDB 集合文件

// 如下所示，先删除 mydb1 库下面的 集合 c1，然后再将本地之前导出好的进行导入恢复
// 返回的数组
// User.find().then(result => console.log(result));
// 返回的也是数组
// User.find({name:'王二麻子'}).then(result => console.log(result));
//匹配大于小于
// User.find({age:{$gt:20,$lt:50}}).then(result => console.log(result));
//匹配包含
// User.find({hobbies:{$in:['敲代码']}}).then(result => console.log(result));
// 选择要查询的字段
// User.find().select('name age').then(result => console.log(result));
// 将数据按照年龄进行排序
// User.find().sort('age').then(result => console.log(result));
// skip跳过多少条数据 limit限制查询数量
// User.find().skip(2).limit(2).then(result => console.log(result));


