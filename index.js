const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const cors = require('cors');
const userRouter = require('./routers/userRouter');
const expenseRouter = require('./routers/expenseRouter');
const transactionRouter = require('./routers/transactionRouter');
require('./config');
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use(
  cors({
    origin:
      // 'https://64b51f4c985a640db2c80593--comforting-cobbler-51cac9.netlify.app/',
      '*',
  })
);
console.log(' running');

// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header(
//     'Access-Control-Allow-Headers',
//     'Origin, X-Requested-With, Content-Type, Accept'
//   );
//   next();
// });

app.get('/', (req, res) => {
  res.send('This server is reserved for prettycash application');
});

app.use('/', userRouter);

app.use('/addexpense', expenseRouter);

app.use('/transaction', transactionRouter);

const PORT = process.env.PORT || 8000;

app.listen(
  PORT,
  console.log('Application is running in port:', PORT.blue.bold)
);
