var express = require("express");
const request = require("request");
const cheerio = require("cheerio");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  let url = "https://www.playstation.com/nl-nl/ps-plus/games/";
  let result = [];

  request(url, function (error, response, html) {
    if (!error) {
      var $ = cheerio.load(html);
      var games = $("div.autogameslist")
        .find("div.tabs__tab-content")
        .each(function (index, element) {
          $(element)
            .find('a[module-name="PS Plus Games List"]')
            .each(function (index1, element1) {
              const gameObject = {
                name: $(element1).text(),
                url: $(element1).attr("href"),
              };

              result.push(gameObject);
            });
        });

      res.status(200).json(result);
    }
  });
});

module.exports = router;
