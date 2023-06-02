import express from 'express';
import { users } from './data/users.js';
import { posts } from './data/posts.js';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import postsRoutes from './routes/postsRoutes.js';
dotenv.config();
const port = process.env.PORT || 8000;

connectDB();

const app = express();

app.get('/', (req, res) => {
  res.send('Hello api');
});

// app.get('/api/users', (req, res) => {
//   res.json(demoProfiles);
// });

app.use('/api/posts', postsRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
