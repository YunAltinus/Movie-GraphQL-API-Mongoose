const User = {
  comments: async (parent, args, { Comment }) => {
    try {
      return await Comment.find({ user_id: parent.id });
    } catch (error) {
      throw new Error('Yorumlar Gösterilemiyor');
    }
  },
  movies: async (parent, args, { Movie }) => {
    try {
      return await Movie.find({ user_id: parent.id });
    } catch (error) {
      throw new Error('Ekledigi filmler Gösterilemiyor');
    }
  }
};

module.exports = User;
