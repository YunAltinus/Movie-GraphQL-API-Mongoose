module.exports = {
  createDirector: async (
    parent,
    { data: { name, about, birth } },
    { Director }
  ) => {
    const director = await Director.findOne({ name });
    if (director) {
      throw new Error('Bu yönetmen zaten var.');
    }

    try {
      const newDirector = await new Director({
        name,
        about,
        birth
      }).save();

      return newDirector;
    } catch (error) {
      throw new Error('Yonetmen Olusturulamadi');
    }
  },
  updateDirector: async (
    parent,
    { id, data: { name, about, birth } },
    { Director }
  ) => {
    try {
      let director = await Director.findById(id);

      if (!director) {
        throw new Error('Boyle bir yonetmen bulunmamakta.');
      }

      if (name != undefined) {
        director.name = name;
      }
      if (about != undefined) {
        director.about = about;
      }
      if (birth != undefined) {
        director.birth = birth;
      }

      director = await director.save();

      return 'Guncelleme basarili';
    } catch (e) {
      throw new Error('Yonetmen guncellenemedi');
    }
  }
};
