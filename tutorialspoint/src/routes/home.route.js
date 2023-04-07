const express = require("express");
const homeRoutes = express.Router();

homeRoutes.get("/", (req, res) => {
  if (req.session.views) {
    req.session.views++;
    req.session.sinh = 2;

    res
      .cookie("name", "phan cong sinh")
      .send(
        "Ban da truy cap trang nay " +
          req.session.views +
          "lan" +
          req.session.sinh
      );
  } else {
    req.session.views = 1;
    req.session.sinh = 2;
    res
      .cookie("name", "phan cong sinh")
      .send("Chao mung ban da den lan dau tien");
  }
});

module.exports = homeRoutes;
