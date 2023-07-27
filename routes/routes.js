const express = require("express");
const router = express.Router();

const videoController = require("../controllers/videoController");
const productController = require("../controllers/productController");
const commentController = require("../controllers/commentController");

router.post("/videos", videoController.createVideo); // create a new video
router.get("/videos", videoController.getVideos); // return all videos
router.get("/videos/:videoID", videoController.getVideo); // return a video detail with its products

router.post("/products", productController.createProduct); // create a product to a video
router.get("/videos/:videoID/products", productController.getProductsOfVideo); // return products of a video

router.post("/comments", commentController.createComment); // create a comment to a video
router.get("/videos/:videoID/comments", commentController.getCommentsOfVideo); // return comments of a video

module.exports = router;
