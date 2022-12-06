// import * as createError from 'http-errors';
import express from 'express';
// import * as cookieParser from 'cookie-parser'; // cookie 解析
import * as logger from 'morgan'; // 紀錄
import embyRouter from './routes/emby.js';

const app = express();

// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use('/emby', embyRouter);
// app.use(express.static(path.join(__dirname, 'public'))); // 調用靜態文件

// 捕獲 404 並轉發給錯誤處理程序
app.use(function(req, res, next) {
  next(createError(404));
});

// 錯誤處理器
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

export default app;
