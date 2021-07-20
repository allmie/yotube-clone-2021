// import express from 'express';
import mongoose from 'mongoose';

const videoSchema = new mongoose.Schema({
  title: String,
  description: String,
  meta: {
    views: Number,
    rating: Number,
  },
});

const model = mongoose.model('Video', videoSchema);

export default model;
