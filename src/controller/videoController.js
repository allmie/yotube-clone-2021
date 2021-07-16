export const trending = (req, res) => {
  const videos = [
    {
      title: 'abc',
      rating: 3,
      createdAt: '1 minute ago',
    },
    {
      title: 'xyz',
      rating: 1,
      createdAt: '1 minute ago',
    },
    {
      title: '123',
      rating: 5,
      createdAt: '2 day ago',
    },
  ];
  res.render('home', { pageTitle: 'Home', videos });
};
export const search = (req, res) => res.send('search', { pageTitle: 'Search' });
export const see = (req, res) => res.render('watch', { pageTitle: 'Watch' });
export const edit = (req, res) => res.render('edit', { pageTitle: 'Edit' });
export const deleteVideo = (req, res) =>
  res.send('delete Video', { pageTitle: 'Delete' });
export const upload = (req, res) => res.send('upload', { pageTitle: 'Upload' });
