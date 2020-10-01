const express = require("express");
const router = new express.Router();
const Manga = require("../models/manga");
const auth = require("../middleware/auth");
const User = require("../models/user");
module.exports = router;
//post new manga to manga list
router.post("/api/manga", auth, async (req, res) => {
  const manga = Manga({
    ...req.body,
    owner: req.user._id,
  });
  try {
    await manga.save();
    res.status(201).send(manga);
  } catch (error) {
    res.status(400).send(error);
  }
});

//get user manga list (this gets all manga)
router.get("/api/manga", auth, async (req, res) => {
  const match = {};
  const sort = {};

  if (req.query.completed) {
    match.completed = req.query.completed === "true";
  }

  if (req.query.sortBy) {
    const parts = req.query.sortBy.split(":");
    sort[parts[0]] = parts[1] === "desc" ? -1 : 1;
  }

  try {
    await req.user
      .populate({
        path: "manga",
        match,
        options: {
          // limit: parseInt(req.query.limit) || 4,
          // skip: parseInt(req.query.skip) || 0,
          sort,
        },
      })
      .execPopulate();
    res.status(200).send(req.user.manga);
  } catch (error) {
    res.status(500).send(error);
  }
});

//delete manga
router.delete("/api/manga/:id", auth, async (req, res) => {
  try {
    const manga = await Manga.findOneAndDelete({
      _id: req.params.id,
      owner: req.user._id,
    });

    if (!manga) {
      res.status(404).send("404 manga not found");
    }
    res.send(manga);
  } catch (e) {
    res.status(500).send();
  }
});

//updata manga
router.patch("/api/manga/:id", auth, async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = [
    "readChapterAmount",
    "complete",
    "rating",
    "readingStatus",
  ];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );
  if (!isValidOperation) {
    return res.status(400).send({ error: "Invalid Update" });
  }

  try {
    const manga = await Manga.findOne({
      _id: req.params.id,
      owner: req.user._id,
    });

    if (!manga) {
      return res.status(404).send();
    }

    updates.forEach((update) => (manga[update] = req.body[update]));
    await manga.save();
    res.send(manga);
  } catch (e) {
    res.status(400).send(e);
  }
});
