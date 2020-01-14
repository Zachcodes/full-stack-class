module.exports = {
  async getPosts(req, res) {
    const db = req.app.get('db');
    const { userId } = req.params;
    // Look up built in queries in massive docs
    // db.posts.find({ user_id: +userId })
    const posts = await db.posts.get_posts_by_user([+userId]);
    res.send(posts);
  },
  async deletePost(req, res) {
    const { postId } = req.params;
    const db = req.app.get('db');
    const posts = await db.posts.delete_post([+postId, req.session.user.id]);
    res.send(posts);
  },
  async editPost(req, res) {
    const { postId } = req.params;
    const { newTitle, newContent } = req.body;
    const db = req.app.get('db');
    console.log(req.session.user);
    const posts = await db.posts.edit_post([
      newTitle,
      newContent,
      +postId,
      req.session.user.id
    ]);
    console.log('posts', posts);
    res.send(posts);
  },
  async savePost(req, res) {
    const { title, content } = req.body;
    const db = req.app.get('db');
    const posts = await db.posts.save_post([
      title,
      content,
      req.session.user.id
    ]);
    res.send(posts);
  }
};
