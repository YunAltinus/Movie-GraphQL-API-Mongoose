const Comment = {
  childrenComments: async (parent, args, { Comment }) => {
    try {
      const childrenComments = await Comment.find({
        parent_comment_id: parent.id
      });
      return childrenComments;
    } catch (error) {
      throw new Error('Yorumlar Gösterilemiyor');
    }
  },
  user: async (parent, args, { User }) => {
    try {
      return await User.findById(parent.user_id);
    } catch (error) {
      throw new Error('Yorumlar Gösterilemiyor');
    }
  },
  movie: async (parent, args, { Movie }) => {
    try {
      return await Movie.findById(parent.movie_id);
    } catch (error) {
      throw new Error('Ekledigi filmler Gösterilemiyor');
    }
  }
};

module.exports = Comment;
