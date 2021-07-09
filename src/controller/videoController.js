export const trending = (req, res) => res.render('home', { pageTitle: 'Home' });
export const search = (req, res) => res.send('search', { pageTitle: 'Search' });
export const see = (req, res) => res.render('watch', { pageTitle: 'Watch' });
export const edit = (req, res) => res.render('edit', { pageTitle: 'Edit' });
export const deleteVideo = (req, res) =>
  res.send('delete Video', { pageTitle: 'Delete' });
export const upload = (req, res) => res.send('upload', { pageTitle: 'Upload' });
