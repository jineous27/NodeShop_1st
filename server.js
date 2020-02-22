const express = require("express");
const app = express();
const morgan = require('morgan');
const bodyParser = require("body-parser");

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



app.use(morgan('dev'));
app.use(bodyParser.json()); //bodyparser 설정하라는 정해진 구문//
app.use(bodyParser.urlencoded({ extended: false}));

app.use('/products', productRoutes);
app.use('/carts', cartRoutes); 
app.use('/bbs', bbsRoutes);


const PORT = 1234;


app.listen(PORT, () => console.log("server started"));
