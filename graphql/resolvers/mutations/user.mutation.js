const { generate } = require('../../../helpers/token');

module.exports = {
  createUser: async (
    parent,
    {
      data: {
        username,
        password,
        email,
        checkPassword,
        about,
        birth,
        website,
        profile_image
      }
    },
    { User }
  ) => {
    const checkName = await User.findOne({ username });
    if (checkName) {
      throw new Error('Bu kullanıcı adı kullanılmaktadır');
    }

    const checkEmail = await User.findOne({ email });
    if (checkEmail) {
      throw new Error('Bu mail adresi kullanılmaktadır');
    }

    if (password !== checkPassword) {
      throw new Error('Sifreler birbiriyle uyumlu degil');
    }

    try {
      const newUser = await new User({
        username,
        password,
        about,
        birth,
        email,
        website,
        profile_image
      }).save();

      return { token: generate(newUser) };
    } catch (error) {
      throw new Error('Kullanıcı Oluşturulamadı');
    }
  }
};
