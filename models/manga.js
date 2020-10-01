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
    unique: false,
  },
  chapterAmount: {
    type: Number,
    default: 0,
    unique: false,
  },
  synopsis: {
    type: String,
    trim: true,
    default: "",
    unique: false,
  },
  readingStatus: {
    type: String,
    default: "Reading"
  },
  rating: {
    type: Number,
    default: 0,
  },
  malScore: {
    type: Number,
    deafult: 0,
    unique: false,
  },
  mangaImage: {
    type: String,
    default: "",
    unique: false,
  },
  malURL: {
    type: String,
    default: "",
    unique: false,
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
