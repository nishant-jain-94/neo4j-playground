const express = require('express');
const userRoutes = require('./user');

const app = express();
app.use('/user', userRoutes);
app.listen(4000);
