module.exports = {
  createMovie: async (
    parent,
    { data: { name, description, year, director_id, user_id } },
    { Movie }
  ) => {
    const movie = await Movie.findOne({ name });

    if (movie) {
      throw new Error('Bu film zaten var.');
    }
    try {
      const newMovie = await new Movie({
        name,
        description,
        year,
        director_id,
        user_id
      }).save();

      return newMovie;
    } catch (error) {
      throw new Error('Yeni film eklenemedi');
    }
  },
  updateMovie: async (
    parent,
    { data: { id, name, description, year } },
    { Movie }
  ) => {
    try {
      let movie = await Movie.findById(id);

      if (!movie) {
        throw new Error('Bu isme sahip bir film bulunmamakta.');
      }

      if (name != undefined) {
        movie.name = name;
      }
      if (description != undefined) {
        movie.description = description;
      }
      if (year != undefined) {
        movie.year = year;
      }

      movie = await movie.save();

      return 'Film guncelleme islemi basarili';
    } catch (error) {
      throw new Error('Film guncellenemedi');
    }
  },
  deleteMovie: async (parent, { id }, { Movie }) => {
    try {
      const movie = await Movie.findById(id);

      if (!movie) {
        throw new Error('Bu isme sahip bir film bulunmamakta.');
      }

      await movie.remove();

      return 'Film silme islemi basarili';
    } catch (error) {
      throw new Error('Film silinemedi');
    }
  }
};
