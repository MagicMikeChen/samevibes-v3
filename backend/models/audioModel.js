import mongoose from 'mongoose';

const audioSchema = new mongoose.Schema({
  audioId: { type: String },
  audioSrc: { type: String },
  audioTitle: { type: String },
  audioImage: { type: String },
  album: { type: String },
  artist: { type: String },
  audioType: { type: String },
});

const Audio = mongoose.model('Audio', audioSchema);

export default Audio;
