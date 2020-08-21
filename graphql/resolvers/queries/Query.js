const token = require('../../../helpers/token');

const Query = {
  user: async (parent, args, { User }) => {
    try {
      return await User.findById(args.id);
    } catch (error) {
      throw new Error('Kullanıcı bulunamadı');
    }
  },
  users: async (parent, args, { User }) => {
    try {
      return await User.find({}).sort({ createdAt: 'desc' });
    } catch (error) {
      throw new Error('Kullanıcılar bulunamadı');
    }
  },
  comment: async (parent, args, { Comment }) => {
    try {
      return await Comment.findById(args.id);
    } catch (error) {
      throw new Error('Yorum bulunamadı');
    }
  },
  comments: async (parent, args, { Comment }) => {
    try {
      return await Comment.find({}).sort({ createdAt: 'desc' });
    } catch (error) {
      throw new Error('Yorumlar bulunamadı');
    }
  },

  director: async (parent, args, { Director }) => {
    try {
      return await Director.findById(args.id);
    } catch (error) {
      throw new Error('Yönetmen bulunamadı');
    }
  },
  directors: async (parent, args, { Director }) => {
    try {
      return await Director.find({}).sort({ createdAt: 'desc' });
    } catch (error) {
      throw new Error('Yönetmenler bulunamadı');
    }
  },

  movie: async (parent, args, { Movie }) => {
    try {
      return await Movie.findById(args.id);
    } catch (error) {
      throw new Error('Film bulunamadı');
    }
  },
  movies: async (parent, args, { Movie }) => {
    try {
      return await Movie.find({}).sort({ createdAt: 'desc' });
    } catch (error) {
      throw new Error('Filmler bulunamadı');
    }
  }
};

module.exports = Query;
