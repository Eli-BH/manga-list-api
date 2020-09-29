const mongoose = require("mongoose");

const mangaSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    unique: false,
  },
  readChapterAmount: {
    type: Number,
    default: 0,
  },
  chapterAmount: {
    type: Number,
    default: 0,
  },
  synopsis: {
    type: String,
    trim: true,
    default: "",
    unique: false,
  },
  malScore: {
    type: Number,
    deafult: 0,
  },
  mangaImage: {
    type: String,
    default: "",
  },
  malURL: {
    type: String,
    default: "",
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
