import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  username: { type: String, required: true },
  name: String,
  password: String,
  location: String,
});

userSchema.pre('save', async function () {
  this.password = await bcrypt.hash(this.password, 4);
});

// userSchema.static('hasingPW', async function (password) {
//   try {
//     const hashPassword = await bcrypt.hash(password, 4);
//     return hashPassword;
//   } catch (error) {
//     conole.log('error:', error);
//   }
// });

userSchema.static('checkPassword', async function (password, encryptPassword) {
  return await bcrypt.compare(password, encryptPassword);
});

const model = mongoose.model('User', userSchema);

export default model;
