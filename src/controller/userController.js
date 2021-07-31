import User from '../models/User';

export const getJoin = (req, res) => res.render('join', { pageTitle: 'Join' });
export const postJoin = async (req, res) => {
  const {
    body: { email, username, name, password, password2, location },
  } = req;
  let message = '';

  const checkAccount = await User.findOne({ $or: [{ email }, { username }] });

  if (checkAccount) {
    message = 'Email / Username already used.';
    return res.render('join', { pageTitle: 'Join', message });
  }
  {
    //   const checkEmail = await User.findOne({
    //     email,
    //   });
    //   const checkUsername = await User.findOne({
    //     username,
    //   });
    //
    //   if (checkEmail) {
    //     message = 'Email already used';
    //     return res.render('join', { pageTitle: 'Join', message });
    //   }
    //
    //   if (checkUsername) {
    //     message = 'Username already used';
    //     return res.render('join', { pageTitle: 'Join', message });
    //   }
  }
  if (password !== password2) {
    message = 'Check your password';
    return res.render('join', { pageTitle: 'Join', message });
  }

  const aUser = await User.create({
    email,
    username,
    name,
    password: User.hasingPW(password),
    location,
  });

  return res.redirect('/');
};

export const login = (req, res) => res.send('Login');
export const logout = (req, res) => res.send('Logout');
export const see = (req, res) => res.send('Detail User');
export const edit = (req, res) => res.send('Edit User');
export const remove = (req, res) => res.send('Remove User');
