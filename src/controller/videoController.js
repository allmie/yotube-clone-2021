const videos = [
  {
    title: 'abc',
    rating: 3,
    createdAt: '1 minute ago',
    id: 1,
    views: 31,
  },
  {
    title: 'xyz',
    rating: 1,
    createdAt: '1 minute ago',
    id: 2,
    views: 1,
  },
  {
    title: '123',
    rating: 5,
    createdAt: '2 day ago',
    id: 3,
    views: 24,
  },
];

export const trending = (req, res) => {
  return res.render('home', { pageTitle: 'Home', videos });
};
export const see = (req, res) => {
  const {
    params: { id },
  } = req;

  const video = videos.find((select) => select.id == id);

  return res.render('see', { pageTitle: `See ${video.title}`, video });
};
export const getEdit = (req, res) => {
  const {
    params: { id },
  } = req;

  const video = videos.find((select) => select.id == id);

  return res.render('edit', { pageTitle: `Edit ${video.title}`, video });
};
export const postEdit = (req, res) => {
  const {
    params: { id },
  } = req;
  const {
    body: { title },
  } = req;

  const video = videos.find((select) => select.id == id);
  video.title = title;

  return res.redirect(`/videos/${id}`);
};

export const getUpload = (req, res) => {
  return res.render('upload', { pageTitle: 'Upload Video' });
};
export const postUpload = (req, res) => res.redirect('/');

export const search = (req, res) => res.send('search', { pageTitle: 'Search' });
export const deleteVideo = (req, res) =>
  res.send('delete Video', { pageTitle: 'Delete' });
export const upload = (req, res) => res.send('upload', { pageTitle: 'Upload' });
