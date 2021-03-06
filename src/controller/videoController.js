import Video from '../models/Video';

export const trending = async (req, res) => {
  // req.session.aa += 1;
  // console.log(req.session.aa);
  // console.log(req.sessionID);
  try {
    const videos = await Video.find().sort({ createdAt: 'asc' });
    return res.render('home', { pageTitle: 'Home', videos });
  } catch (err) {
    return res.status(400).send('Database connection error: ', err);
  }
};
export const see = async (req, res) => {
  const {
    params: { id },
  } = req;

  const video = await Video.findById(id);
  if (!video) {
    return res.status(404).render('404', { pageTitle: 'Video not found.' });
  }
  return res.render('see', { pageTitle: video.title, video });
};
export const getEdit = async (req, res) => {
  const {
    params: { id },
  } = req;

  const video = await Video.findById(id);
  if (!video) {
    return res.status(404).render('404', { pageTitle: 'Video not found.' });
  }
  return res.render('edit', { pageTitle: `Edit ${video.title}`, video });
};
export const postEdit = async (req, res) => {
  const {
    params: { id },
  } = req;
  const { title, description, hashtags } = req.body;

  const video = Video.exists({ _id: id });
  if (!video) {
    return res.status(404).render('404', { pageTitle: 'Video not found.' });
  }
  await Video.findByIdAndUpdate(id, {
    title,
    description,
    hashtags: Video.convertHashtags(hashtags),
  });
  return res.redirect(`/videos/${id}`);
};

export const getUpload = (req, res) => {
  return res.render('upload', { pageTitle: 'Upload Video' });
};
export const postUpload = async (req, res) => {
  const { title, description, hashtags } = req.body;

  try {
    await Video.create({
      title,
      description,
      hashtags: Video.convertHashtags(hashtags),
    });
    return res.redirect('/');
  } catch (err) {
    console.log('upload Error: ', err);
    return res.status(400).render('upload', {
      pageTitle: 'Upload Video',
      message: err._message,
    });
  }
};

export const deleteVideo = async (req, res) => {
  const {
    params: { id },
  } = req;

  await Video.findByIdAndDelete(id);
  return res.redirect('/');
};

export const search = async (req, res) => {
  const {
    query: { keyword },
  } = req;
  let videos = [];

  if (keyword) {
    videos = await Video.find({
      title: { $regex: new RegExp(keyword, 'i') },
    });
  }
  return res.render('search', {
    pageTitle: `Searching by "${keyword}"`,
    videos,
  });
};
