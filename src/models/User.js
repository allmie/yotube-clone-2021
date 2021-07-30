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

const model = mongoose.model('User', userSchema);

export default model;
