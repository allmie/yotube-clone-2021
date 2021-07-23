// import express from 'express';
import mongoose from 'mongoose';

const videoSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true, maxLength: 80 },
  description: { type: String, required: true, trim: true, minLength: 20 },
  hashtags: [{ type: String }],
  createdAt: { type: Date, required: true, default: Date.now },
  meta: {
    views: { type: Number, default: 0 },
    rating: { type: Number, default: 0 },
  },
});

videoSchema.pre('save', async function () {
  this.hashtags = this.hashtags[0]
    .split(',')
    .map((element) => (element.startsWith('#') ? element : `#${element}`));
  console.log(this.hashtags);
});

const model = mongoose.model('Video', videoSchema);

export default model;
