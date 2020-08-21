module.exports = {
  createComment: async (
    parent,
    { data: { content, movie_id, user_id, parent_comment_id } },
    { Comment }
  ) => {
    try {
      const newComment = await new Comment({
        content,
        movie_id,
        user_id,
        parent_comment_id
      }).save();

      return newComment;
    } catch (error) {
      throw new Error('Yorum ekleme başarısız');
    }
  }
};
