import mongoose from 'mongoose';

mongoose.connect('mongodb://127.0.0.1:27017/wetube', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

const db = mongoose.connection;

db.once('open', () => console.log('📢 Connected to DB'));
db.on('error', (error) => console.log('error: ', error));
