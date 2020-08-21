const slugify = require("slugify");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const directorSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  about: {
    type: String,
    required: true,
  },
  slug: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  birth: {
    type: Number,
    required: true,
  },
});

directorSchema.pre("save", function (next) {
  if (!this.isModified("name")) return next();

  this.slug = this.makeSlug();
  return next();
});

directorSchema.methods.makeSlug = function () {
  return slugify(this.name, {
    replacement: "-",
    remove: /[*+~.()'"!:@]/g,
    lower: true,
  });
};

module.exports = mongoose.model("Director", directorSchema);
