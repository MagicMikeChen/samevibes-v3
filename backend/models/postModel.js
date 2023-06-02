import mongoose from 'mongoose';

const postSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    userId: { type: String },
    userName: { type: String },
    userAvatar: { type: String },
    postType: { type: String },
    contentObj: {
      contentId: { type: String },
      contentTitle: { type: String },
      contentPhoto: { type: String },
      contentURL: { type: String },
      contentType: { type: String },
      audioId: { type: String },
      audioSrc: { type: String },
      audioTitle: { type: String },
      audioImage: { type: String },
      album: { type: String },
      artist: { type: String },
      audioType: { type: String },
    },
    isLiked: { type: Boolean, default: false },
    comments: [],
  },
  {
    timestamps: true,
  }
);

const Post = mongoose.model('Post', postSchema);

export default Post;
