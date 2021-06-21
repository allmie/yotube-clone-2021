import express from "express";
import morgan from 'morgan';

const app = express();
const PORT = 4000;

const loggerMiddleware = morgan('dev');

const home = (req, res) => res.send('<h1>Home</h1>');

app.use(loggerMiddleware);
app.get('/', home);

app.listen(PORT, () => console.log("Listening... ✔"));