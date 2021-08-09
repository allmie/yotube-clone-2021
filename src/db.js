import mongoose from 'mongoose';

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

const db = mongoose.connection;

db.once('open', () => console.log('📢 Connected to DB'));
db.on('error', (error) => console.log('error: ', error));
