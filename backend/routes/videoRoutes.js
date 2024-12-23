const express = require("express");
const {uploadVideo, getAllVideoByUserId} = require("../controllers/videoController");
const authMiddleware = require("../middleware/authMiddleware");

const videoRoute = express.Router();

videoRoute.get("/", authMiddleware, getAllVideoByUserId);
videoRoute.post("/upload", authMiddleware, uploadVideo);

module.exports = videoRoute;
