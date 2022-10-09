const express = require("express");
const router = express.Router();
const { searchfromyoutube } = require("../controllers/youtube");

router.get("/search", searchfromyoutube);

module.exports= router