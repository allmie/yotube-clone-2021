import express from 'express';
import morgan from 'morgan';
import globalRouter from './router/globalRouter';
import userRouter from './router/userRouter';
import videoRouter from './router/videoRouter';

const app = express();
const PORT = 4000;

const loggerMiddleware = morgan('dev');
app.use(loggerMiddleware);

app.use('/', globalRouter);
app.use('/videos', videoRouter);
app.use('/users', userRouter);

app.listen(PORT, () => console.log('Listening... ✔'));
