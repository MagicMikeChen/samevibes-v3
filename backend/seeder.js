import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors';
import { users } from './data/users.js';
import { posts } from './data/posts.js';
import { audioTracks } from './data/audioTracks.js';
import User from './models/userModel.js';
import Post from './models/postModel.js';
import Audio from './models/audioModel.js';
import connectDB from './config/db.js';

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await Audio.deleteMany();
    await Post.deleteMany();
    await User.deleteMany();

    const createdUsers = await User.insertMany(users);

    const adminUser = createdUsers[0]._id;

    const samplePosts = posts.map((post) => {
      if (post.userId) {
      }
      return { ...post, user: adminUser };
    });

    await Audio.insertMany(audioTracks);
    await Post.insertMany(posts);

    console.log('Data Imported!'.green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Audio.deleteMany();
    await Post.deleteMany();
    await User.deleteMany();

    console.log('Data Destroyed!'.red.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}
