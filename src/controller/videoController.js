import Video from '../models/Video';

export const trending = async (req, res) => {
  try {
    const videos = await Video.find({});
    console.log(videos);
    return res.render('home', { pageTitle: 'Home', videos });
  } catch (err) {
    return res.send('Database connection error: ', err);
  }
};
export const see = (req, res) => {
  const {
    params: { id },
  } = req;

  return res.render('see', { pageTitle: `See` });
};
export const getEdit = (req, res) => {
  const {
    params: { id },
  } = req;

  return res.render('edit', { pageTitle: `Edit` });
};
export const postEdit = (req, res) => {
  const {
    params: { id },
  } = req;
  const {
    body: { title },
  } = req;
};

export const getUpload = (req, res) => {
  return res.render('upload', { pageTitle: 'Upload Video' });
};
export const postUpload = async (req, res) => {
  const { title, description, hashtags } = req.body;

  await Video.create({
    title,
    description,
    hashtags: hashtags.split(',').map((element) => `#${element.trim()}`),
    createdAt: Date.now(),
    meta: {
      views: 0,
      rating: 0,
    },
  });

  return res.redirect('/');
};

export const search = (req, res) => res.send('search', { pageTitle: 'Search' });
export const deleteVideo = (req, res) =>
  res.send('delete Video', { pageTitle: 'Delete' });
export const upload = (req, res) => res.send('upload', { pageTitle: 'Upload' });
