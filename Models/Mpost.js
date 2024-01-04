const db = require("../util/database");

module.exports = class Post {
  constructor(title, description, image, id) {
    this.title = title;
    this.description = description;
    this.image = image;
    this.id = id || null;
  }

  setPost() {
    if (this.id) {
      return db.execute(
        "UPDATE post SET title = ?, description = ?, image = ? WHERE id = ?",
        [this.title, this.description, this.image, this.id]
      );
    } else {
      return db.execute(
        "INSERT INTO post (title,description,image) VALUES(?,?,?)",
        [this.title, this.description, this.image]
      );
    }
  }

  static deletePost(id) {
    return db.execute("DELETE FROM post WHERE post.id = ?", [id]);
  }

  static oldPost(id) {
    return db.execute("SELECT * FROM post WHERE post.id =?", [id]);
  }

  static getDetailPost(id) {
    return db.execute("SELECT * FROM post WHERE post.id = ?", [id]);
  }

  static getAllPosts() {
    return db.execute("SELECT * FROM post");
  }
};
