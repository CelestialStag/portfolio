import mongoose from 'mongoose';

export const ExampleMongoSchema = new mongoose.Schema({
  __v: {
    type: Number,
    select: false,
    default: 1,
  },
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    auto: true,
    select: false,
  },
  id: {
    type: Number,
    unique: true,
  },
  example: {
    type: String,
    unique: true,
  },
  updated: {
    type: Date,
    index: true,
  },
  created: {
    type: Date,
    index: true,
  },
  deleted: {
    type: Date,
    index: true,
  },
});

export const ExampleMongoModel = mongoose.model('Example', ExampleMongoSchema, undefined, {
  overwriteModels: true,
});
