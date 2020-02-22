const express = require("express");
const app = express();
const morgan = require('morgan');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");


/*
app.use((req, res) => {
    res.json({
        message: 'Okay'
    });
});
*/

const productRoutes = require('./routes/products');
const cartRoutes = require('./routes/cart');
const bbsRoutes = require('./routes/bbs');

const DB = "mongodb+srv://Admin-jiny:wlsl4378@cluster0-ew1hw.mongodb.net/test?retryWrites=true&w=majority"; //여기는 DB url 주소가 들어감, DB 주소를 상수화 시켰음. 

//아래와 같이 연결한다. DB 연결 방법// 앞으로 아래의 형식을 자주 볼거임 //몽그스에 연결하고, then 나서 '이렇게 해라'실행, catch는 에러가 났을 때 핸들링
// mongoose.connect(DB, { useNewUrlParser: true })
//     .then( () => console.log("MongoDB Connected"))
//     .catch(error => console.log(error));

mongoose.connect(DB, { useNewUrlParser: true, useUnifiedTopology: true })
    .then( () => console.log("MongoDB Connected …"))
    .catch(error => console.log(error));


app.use(morgan('dev'));
app.use(bodyParser.json()); //bodyparser 설정하라는 정해진 구문//
app.use(bodyParser.urlencoded({ extended: false}));

app.use('/products', productRoutes);
app.use('/carts', cartRoutes); 
app.use('/bbs', bbsRoutes);


const PORT = 1234;


app.listen(PORT, () => console.log("server started"));
