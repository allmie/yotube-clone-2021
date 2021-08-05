import User from '../models/User';
import bcrypt from 'bcrypt';

export const getJoin = (req, res) => res.render('join', { pageTitle: 'Join' });
export const postJoin = async (req, res) => {
  const {
    body: { email, username, name, password, password2, location },
  } = req;
  let message = '';

  const checkAccount = await User.exists({ $or: [{ email }, { username }] });

  if (checkAccount) {
    message = 'Email / Username already used.';
    return res.status(400).render('join', { pageTitle: 'Join', message });
  }

  if (password !== password2) {
    message = 'Check your password';
    return res.status(400).render('join', { pageTitle: 'Join', message });
  }

  try {
    const aUser = await User.create({
      email,
      username,
      name,
      password: await User.hasingPW(password),
      location,
    });

    return res.redirect('/');
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .render('join', { pageTitle: 'Join', message: error._message });
  }
};

export const getLogin = (req, res) =>
  res.render('login', { pageTitle: 'Login' });
export const postLogin = async (req, res) => {
  const {
    body: { username, password },
  } = req;

  const isUser = await User.findOne({ username });

  if (isUser) {
    const ok = await User.checkPassword(password, isUser.password);

    if (!ok) {
      return res.status(400).render('login', {
        pageTitle: 'Login',
        message: 'Check your password',
      });
    }
    req.session.login = true;
    req.session.user = isUser;

    return res.redirect('/');
  }

  return res.status(400).render('login', {
    pageTitle: 'Login',
    message: 'Can`t find user',
  });
};

export const logout = (req, res) => res.send('Logout');
export const see = (req, res) => res.send('Detail User');
export const edit = (req, res) => res.send('Edit User');
export const remove = (req, res) => res.send('Remove User');
