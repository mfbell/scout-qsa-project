import mongoose from 'mongoose';

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
  test(a: any) {console.log(a);}
}

export default mongoose.model('Blog', blogSchema);