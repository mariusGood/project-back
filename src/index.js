require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const userRouter = require('./routes/userRoutes');
const productRouter = require('./routes/productRoutes');
const cartRouter = require('./routes/cartRouter');

const { serverPort } = require('./configs');

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use('/', userRouter);
app.use('/auth', productRouter);
app.use('/auth', cartRouter);

app.all('*', (req, res) => {
  res.status(404).send({ error: 'Page not found' });
});

app.listen(serverPort, () => {
  console.log(`Server is running on port ${serverPort}`);
});
