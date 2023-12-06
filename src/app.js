const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const router = require('./app/routes/routes');
const globalErrorHandler = require('./app/middlewares/globalErrorHandler');

const app = express();

app.use(cookieParser());

app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true,
  }),
);
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('uploads'));

app.use('/api/v1', router);

// global error handler
app.use(globalErrorHandler);

app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: 'Not Found',
    errorMessages: [
      {
        path: req.originalUrl,
        message: 'API Not Found',
      },
    ],
  });
  next();
});

module.exports = app;
