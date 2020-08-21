// @ts-nocheck
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slugify = require('slugify');

const movieSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  slug: String,
  createdAt: {
    type: Date,
    default: Date.now
  },
  year: {
    type: Number,
    required: true
  },
  director_id: {
    type: mongoose.Types.ObjectId,
    ref: 'Director',
    required: [true, 'Filmin yonetmeni olmak zorunda']
  },
  user_id: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
    required: true
  }
});

// movieSchema.virtual('likesCount').get(function() {
//   return this.likes.length;
// });

// Pre Save Method

movieSchema.pre('save', function(next) {
  if (!this.isModified('name')) return next();

  this.slug = this.makeSlug();
  return next();
});

movieSchema.methods.makeSlug = function() {
  return slugify(this.name, {
    replacement: '-',
    remove: /[*+~.()'"!:@]/g,
    lower: true
  });
};

module.exports = mongoose.model('Movie', movieSchema);
