import express, { urlencoded } from 'express';
import session from 'express-session';
import morgan from 'morgan';
import globalRouter from './router/globalRouter';
import userRouter from './router/userRouter';
import videoRouter from './router/videoRouter';

const app = express();

const loggerMiddleware = morgan('dev');

app.set('view engine', 'pug');
app.set('views', process.cwd() + '/src/views');

app.use(
  session({
    secret: 'hawai',
    resave: true,
    saveUninitialized: true,
  })
);

// session 확인
app.use((req, res, next) => {
  // console.log(req.session);
  req.sessionStore.all((err, session) => {
    console.log(session);
    next();
  });
});

app.use(express.urlencoded({ extended: true }));
app.use(loggerMiddleware);

app.use('/', globalRouter);
app.use('/videos', videoRouter);
app.use('/users', userRouter);

export default app;
