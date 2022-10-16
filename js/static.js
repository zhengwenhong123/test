const path = require('path')
const express = require('express');
const cors = require('cors');
const app = express();

// app.use('/aa', express.static('../public'));

app.use(express.static('./public1'));
app.use(cors());

// app.get('/user/:id', function (req, res) {
//     let data = [{id:1,text:'数据1',},{id:2,text:'数据2',},{id:3,text:'数据3',},{id:4,text:'数据4',},{id:5,text:'数据5',}, {
//         id: 5,
//         text: '数据6',
//     },]
//     res.setHeader('Access-Control-Allow-Origin',"*")
//
//     if(req.params){
//         res.send(data[req.params.id - 1])
//     }
//
//     // res.send([{
//     //     stats:1,
//     //     text:'Hello world',
//     //     data:req.query,
//     // }]);
// })

// app.get('/', function (req, res) {
//     res.send([1, 2, 3])
// })

app.listen('3001', function () {
    console.log('创建服务器')
})
