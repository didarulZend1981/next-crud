import mongoose, { Schema } from "mongoose";


const BlogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  blogger:{ type: String, required: true },
  date: { type: String, required: true },
  category: { type: String, required: true },
  shortDescription: { type: String, required: true },
  content: { type: String, required: true },
});


const Blog = mongoose.models.blogs || mongoose.model("blogs", BlogSchema);

export default Blog;