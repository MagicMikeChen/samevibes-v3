import express from 'express';
const router = express.Router();
import { loginSpotify, getMyTop } from '../controllers/spotifyController.js';

router.route('/login').post(loginSpotify);
router.route('/get-my-top').get(getMyTop);

export default router;
