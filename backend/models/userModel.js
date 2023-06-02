import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  userId: { type: String },
  userName: { type: String, required: true },
  userAvatar: { type: String },
  userFriendStatus: { type: String },
  userIntro: { type: String },
  userCompany: { type: String },
  userJobTitle: { type: String },
  userEducation: { type: String },
  userLocation: { type: String },
  userInstagram: { type: String },
  userRelationship: { type: String },
  userHobby: [String],
  userFavAlbums: [
    {
      audio: { type: mongoose.Schema.Types.ObjectId, ref: 'Audio' },
    },
  ],
});

const User = mongoose.model('User', userSchema);

export default User;
