import express from 'express';
import spotifyWebApi from 'spotify-web-api-node';
import bodyParser from 'body-parser';
import cors from 'cors';
import { users } from './data/users.js';
import { posts } from './data/posts.js';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import postsRoutes from './routes/postsRoutes.js';
import spotifyRoutes from './routes/spotifyRoutes.js';

dotenv.config();
const port = process.env.PORT || 8000;
connectDB();

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello api');
});

// app.get('/api/users', (req, res) => {
//   res.json(demoProfiles);
// });
app.post('/api/login-spotify', (req, res) => {
  if (req.body.code) {
    const code = req.body.code;
    const spotifyApi = new spotifyWebApi({
      redirectUri: 'http://localhost:3000/with-spotify',
      clientId: process.env.SPOTIFY_CLIENT,
      clientSecret: process.env.SPOTIFY_SECRET,
    });
    spotifyApi
      .authorizationCodeGrant(code)
      .then((data) => {
        res.json({
          accessToken: data.body.access_token,
          refreshToken: data.body.refresh_token,
          expiresIn: data.body.expires_in,
        });
      })
      .catch((err) => console.log(err));
  }
});
// app.use('/api/spotify', spotifyRoutes);
app.use('/api/posts', postsRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
