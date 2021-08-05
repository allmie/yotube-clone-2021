export const localsMiddleware = (req, res, next) => {
  res.locals.isLogin = Boolean(req.session.isLogin);
  res.locals.siteUser = req.session.user;
  res.locals.siteName = 'Wetubez';
  next();
};
