const Query = require('./queries/Query');
const Movie = require('./queries/Movie');
const Director = require('./queries/Director');
const User = require('./queries/User');
const Comment = require('./queries/Comment');

const Mutation = require('./mutations/index');

module.exports = {
  Query,
  Movie,
  Director,
  User,
  Comment,
  Mutation
};
