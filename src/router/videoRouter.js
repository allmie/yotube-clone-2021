import express from 'express';
import {
  deleteVideo,
  getEdit,
  getUpload,
  postEdit,
  postUpload,
  see,
  upload,
} from '../controller/videoController';

const videoRouter = express.Router();

videoRouter.get('/:id(\\d+)', see);

videoRouter.route('/:id(\\d+)/edit').get(getEdit).post(postEdit);
videoRouter.route('/upload').get(getUpload).post(postUpload);

videoRouter.get('/:id(\\d+)/delete', deleteVideo);

export default videoRouter;
