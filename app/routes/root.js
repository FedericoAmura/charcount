let express = require('express');
let router = express.Router();

/* GET root page. */
router.get('/', function(req, res, next) {
  res.json();
});

module.exports = router;
