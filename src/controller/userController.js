import User from '../models/User';

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
      password,
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

export const login = (req, res) => res.send('Login');
export const logout = (req, res) => res.send('Logout');
export const see = (req, res) => res.send('Detail User');
export const edit = (req, res) => res.send('Edit User');
export const remove = (req, res) => res.send('Remove User');
