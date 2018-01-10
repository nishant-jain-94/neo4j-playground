const express = require('express');
const userRoutes = require('./user');

const PORT = 4000;
const app = express();
app.use('/user', userRoutes);
app.listen(PORT, () => {
  console.log(`Server listening on port ${4000}`);
});
