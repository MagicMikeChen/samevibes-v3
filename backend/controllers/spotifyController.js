import asyncHandler from '../middleware/asyncHandler.js';
import spotifyWebApi from 'spotify-web-api-node';

const spotifyApi = new spotifyWebApi({
  redirectUri: 'http://localhost:3000/with-spotify',
  clientId: process.env.SPOTIFY_CLIENT,
  clientSecret: process.env.SPOTIFY_SECRET,
});

// @desc    Post login
// @route   POST /api/login-spotify'
// @access  Public
export const loginSpotify = asyncHandler(async (req, res) => {
  if (req.body.code) {
    const code = req.body.code;
    spotifyApi
      .authorizationCodeGrant(code)
      .then((data) => {
        res.json({
          accessToken: data.body.access_token,
          refreshToken: data.body.refresh_token,
          expiresIn: data.body.expires_in,
        });
      })
      // .then(() => {
      //   console.log('setAccessToken in server', accessToken);
      //   spotifyApi.setAccessToken(accessToken);
      // })
      .catch((err) => console.log(err));
  }
});

// @desc    Get My Top
// @route   GET /api/spotify/get-my-top
// @access  Public
export const getMyTop = asyncHandler(async (req, res) => {
  const result = await spotifyApi.getMyTopArtists();
  if (result) {
    res.json(result);
  } else {
    res.status(404);
    throw new Error('My top not found');
  }
});
