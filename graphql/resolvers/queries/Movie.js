const Movie = {
  director: async (parent, args, { Director }) => {
    try {
      return await Director.findById(parent.director_id);
    } catch (error) {
      throw new Error('Yonetmen bulunamadi');
    }
  },
  user: async (parent, args, { User }) => {
    try {
      return await User.findById(parent.user_id);
    } catch (error) {
      throw new Error('Yonetmen bulunamadi');
    }
  }
};

module.exports = Movie;
