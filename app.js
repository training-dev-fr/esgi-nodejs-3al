const express = require('express');
const productRouter = require('./route/product.route.js');
const categoryRouter = require('./route/category.route.js');
const { connect} = require('./framework/connection.js');
const sync = require('./framework/sync.js');

const database = async () => {
    await connect();
    await sync();
}

database();

const app = express();

app.use(express.json());

app.use('/product',productRouter);
app.use('/category',categoryRouter);

module.exports = app;


