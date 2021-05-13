const {Book} = require("../models");

exports.allBooks = async (req, res) => {

  try {
    let books = await Book.findAll();
     return res.status(200).json(books);

  } catch (error) {
    console.error(error.message);
    res.status(500).send("server error");
  }
};
exports.addBook = async (req, res) => {
  try {
    let [book, created] = await Book.findOrCreate({
        where: { title: req.body.title },
        defaults: req.body
    })
    return res.status(200).json(book);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("server error");
  }
};
exports.updateBook = async (req, res) => {
  try {
    let book = await Book.findByPk(req.params.id);
    if(!book){
        return res.status(404).json({error:{msg: "Book not found"}});
    }
    await book.update(req.body);
  
    return res.status(200).json(book);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("server error");
  }
};
exports.getBook = async (req, res) => {
  try {
    let book = await Book.findByPk(req.params.id);
    if(!book){
        return res.status(404).json({error:{msg: "Book not found"}});
    }
    return res.status(200).json(book);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("server error");
  }
};
exports.deleteBook = async (req, res) => {
  try {
    let book = await Book.findByPk(req.params.id);
    if(!book){
        return res.status(404).json({error:{msg: "Book not found"}});
    }
    await book.destroy();
    return res.status(200).json({msg: "book deleted"});
  } catch (error) {
    console.error(error.message);
    res.status(500).send("server error");
  }
};
