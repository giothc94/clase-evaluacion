const router = require("express").Router();

const data = require("../MOCK_DATA.json");

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Mocks data",
    data: req.query.id ? data.filter((e)=>e.id == req.query.id) : data
  });
});

module.exports = router;
