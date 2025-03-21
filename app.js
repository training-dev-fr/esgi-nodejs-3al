const express = require('express');
const productRouter = require('./route/product.route.js');
const categoryRouter = require('./route/category.route.js');
const userRouter = require('./route/user.route.js');
const authRouter = require('./route/auth.route.js');
const { connect} = require('./framework/connection.js');
const sync = require('./framework/sync.js');
const dataset = require('./framework/dataset.js');

const database = async () => {
    await connect();
    await sync();
    await dataset();
}

database();

const app = express();

app.use(express.json());

app.use('/product',productRouter);
app.use('/category',categoryRouter);
app.use('/user',userRouter);
app.use('/auth',authRouter);

module.exports = app;


