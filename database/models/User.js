// @ts-nocheck
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
const slugify = require("slugify");
const jwt = require("jsonwebtoken");

const UserSchema = new Schema({
  username: {
    type: String,
    required: [true, "Lütfen kullanıcı adı giriniz"],
    unique: [true, "Lütfen eşsiz bir kullanıcı adı giriniz"],
  },
  email: {
    type: String,
    required: [true, "Lütfen mail adresi giriniz"],
    unique: [true, "Mail adresi eşsiz olmak zorunda"],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Lütfen geçerli bir maıl adresi giriniz",
    ],
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
  password: {
    type: String,
    minlength: 6,
    required: [true, "Lütfen parola giriniz."],
    select: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  slug: String,
  about: {
    type: String,
  },
  website: {
    type: String,
  },
  place: {
    type: String,
  },
  profile_image: {
    type: String,
    default: "default.jpg",
  },
  blocked: {
    type: Boolean,
    default: false,
  },
});

// UserSchema.methods.getTokenFromUserModel = function () {
//   const { JWT_SECRET_KEY, JWT_EXPIRE } = process.env;

//   const payload = {
//     id: this._id,
//     username: this.username,
//   };
//   const token = jwt.sign(payload, JWT_SECRET_KEY, { expiresIn: JWT_EXPIRE });

//   return token;
// };

// Pre Save Method

UserSchema.pre("save", function (next) {
  if (!this.isModified("username")) return next();

  this.slug = this.makeSlug();
  return next();
});

UserSchema.methods.makeSlug = function () {
  return slugify(this.username, {
    replacement: "-",
    remove: /[*+~.()'"!:@]/g,
    lower: true,
  });
};

UserSchema.pre("save", function (next) {
  if (!this.isModified("password")) return next();

  bcrypt
    .hash(this.password, 10)
    .then((hash) => {
      this.password = hash;
      next();
    })
    .catch((err) => console.log(err));
});

module.exports = mongoose.model("User", UserSchema);
