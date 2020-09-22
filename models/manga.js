const mongoose = require("mongoose");

const mangaSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  readChapterAmount: {
    type: Number,
    default: 0,
  },
  chapterAmount: {
    type: Number,
  },
  synopsis: {
    type: String,
    trim: true,
  },
  malScore: {
    type: Number,
  },
  mangaImage: {
    type: String,
  },
  malURL: {
    type: String,
  },
  complete: {
    type: Boolean,
    default: false,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
});

//schemas allow me to use middleware
const Manga = mongoose.model("Manga", mangaSchema);

module.exports = Manga;
