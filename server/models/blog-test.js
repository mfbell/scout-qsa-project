const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title:  String,
  author: String,
  body:   String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs:  Number
  }
});

blogSchema.methods = {
  test(a) {console.log(a)}
}

const Blog = mongoose.model('Blog', blogSchema);

module.exports = {
  schema: blogSchema,
  model: Blog  
};