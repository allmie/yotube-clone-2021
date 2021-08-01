import express from 'express';
import {
  getJoin,
  getLogin,
  postJoin,
  postLogin,
} from '../controller/userController';
import { search, trending } from '../controller/videoController';

const globalRouter = express.Router();

globalRouter.get('/', trending);
globalRouter.route('/join').get(getJoin).post(postJoin);
globalRouter.route('/login').get(getLogin).post(postLogin);
globalRouter.get('/search', search);

export default globalRouter;
