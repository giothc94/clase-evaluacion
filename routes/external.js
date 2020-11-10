const router = require("express").Router();

const axios = require("axios");

const URL = "https://rickandmortyapi.com/api/character";

router.get("/", async (req, res, next) => {
  let result = await axios.get(URL);
  let data = result.data.results;

  res.status(200).json({
    message: "external data",
    data: req.query.id ? data.filter((e)=>e.id == req.query.id) : data,
  });
});

module.exports = router;
