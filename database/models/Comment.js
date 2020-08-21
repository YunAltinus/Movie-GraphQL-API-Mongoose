const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  content: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  user_id: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
    required: true
  },
  movie_id: {
    type: mongoose.Types.ObjectId,
    ref: 'Movie',
    required: true
  },
  parent_comment_id: {
    type: mongoose.Types.ObjectId,
    ref: 'Comment'
  },
  likeCount: {
    type: Number,
    default: 0,
    min: 0
  }
});

// CommentSchema.post('remove', async function() {
//   const user = await User.findById(user_id);

//   user.answers.splice(user.answers.indexOf(this._id), 1);
//   user.answerCount -= 1;

//   await user.save();
// });

module.exports = mongoose.model('Comment', CommentSchema);
