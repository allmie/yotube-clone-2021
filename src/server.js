import express, { urlencoded } from 'express';
import session from 'express-session';
import morgan from 'morgan';
import { localsMiddleware } from './middlewares';
import globalRouter from './router/globalRouter';
import userRouter from './router/userRouter';
import videoRouter from './router/videoRouter';
import MongoStore from 'connect-mongo';

const app = express();

const loggerMiddleware = morgan('dev');

app.set('view engine', 'pug');
app.set('views', process.cwd() + '/src/views');

app.use(
  session({
    secret: process.env.MONGO_SECRET,
    resave: true,
    saveUninitialized: true,
    store: MongoStore.create({ mongoUrl: process.env.MONGO_URL }),
  })
);

// session 확인
// app.use((req, res, next) => {
//   req.sessionStore.all((err, session) => {
//     console.log(session);
//     next();
//   });
// });

app.use(express.urlencoded({ extended: true }));
app.use(loggerMiddleware);
app.use(localsMiddleware);

app.use('/', globalRouter);
app.use('/videos', videoRouter);
app.use('/users', userRouter);

export default app;
