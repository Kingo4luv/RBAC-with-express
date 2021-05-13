const {Post} = require("../models");

exports.allPosts = async (req, res) => {
  try {
    let posts = await Post.findAll();
     return res.status(200).json(posts);

  } catch (error) {
    console.error(error.message);
    res.status(500).send("server error");
  }
};
exports.addPost = async (req, res) => {
  try {
    let [post, created] = await Post.findOrCreate({
        where: { title: req.body.title },
        defaults: req.body
    })
    return res.status(200).json(post);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("server error");
  }
};
exports.updatePost = async (req, res) => {
  try {
    let post = await Post.findByPk(req.params.id);
    if(!post){
        return res.status(404).json({error:{msg: "Post not found"}});
    }
    await post.update(req.body);
  
    return res.status(200).json(post);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("server error");
  }
};
exports.getPost = async (req, res) => {
  try {
    let post = await Post.findByPk(req.params.id);
    if(!post){
        return res.status(404).json({error:{msg: "Post not found"}});
    }
    return res.status(200).json(Post);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("server error");
  }
};
exports.deletePost = async (req, res) => {
  try {
    let post = await Post.findByPk(req.params.id);
    if(!post){
        return res.status(404).json({error:{msg: "Post not found"}});
    }
    await post.destroy();
    return res.status(200).json({msg: "Post deleted"});
  } catch (error) {
    console.error(error.message);
    res.status(500).send("server error");
  }
};
