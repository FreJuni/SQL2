const Post = require("../Models/Mpost");

exports.getPosts = (req, res) => {
  Post.getAllPosts()
    .then(([rows]) => {
      res.render("home", { title: "Home Pages", postArr: rows });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.renderPostForm = (req, res) => {
  res.render("postForm", { title: "Post Form" });
};

exports.postDetail = (req, res) => {
  const id = req.params.id;
  Post.getDetailPost(id)
    .then(([result]) => {
      res.render("postDetail", { title: "Post Detail", post: result[0] });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.deletePost = (req, res) => {
  const id = req.params.id;
  Post.deletePost(id)
    .then((result) => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.createPost = (req, res) => {
  const { title, description, image } = req.body;
  const post = new Post(title, description, image);
  post
    .setPost()
    .then((result) => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getOldPost = (req, res) => {
  const id = req.params.id;
  Post.oldPost(id)
    .then(([result]) => {
      res.render("editPost", { title: "Edit Post", post: result[0] });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.updatedPost = (req, res) => {
  const { title, description, image, id } = req.body;
  const post = new Post(title, description, image, id);
  post
    .setPost()
    .then((result) => {
      console.log(" UPDATED POST", result);
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
};
