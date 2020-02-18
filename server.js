const express = require("express");
const app = express();
const morgan = require('morgan');

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



app.use('/products', productRoutes);
app.use('/carts', cartRoutes); 
app.use('/bbs', bbsRoutes);


const PORT = 1234;


app.listen(PORT, () => console.log("server started"));
