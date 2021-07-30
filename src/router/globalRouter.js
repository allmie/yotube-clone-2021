import express from 'express';
import { getJoin, login, postJoin } from '../controller/userController';
import { search, trending } from '../controller/videoController';

const globalRouter = express.Router();

globalRouter.get('/', trending);
globalRouter.route('/join').get(getJoin).post(postJoin);
globalRouter.get('/login', login);
globalRouter.get('/search', search);

export default globalRouter;
