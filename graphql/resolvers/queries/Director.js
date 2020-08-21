const Director = {
  movies: async (parent, args, { Movie }) => {
    try {
      return await Movie.find({ director_id: parent.id });
    } catch (error) {
      throw new Error('Filmler bulunamadi');
    }
  }
};

module.exports = Director;
