const director = require('./director.mutation');
const movie = require('./movie.mutation');
const user = require('./user.mutation');
const comment = require('./comment.mutation');

const Mutation = {
  ...director,
  ...movie,
  ...user,
  ...comment
};

module.exports = Mutation;
