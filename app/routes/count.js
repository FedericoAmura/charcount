let express = require('express');
let router = express.Router();

const EXCLUDED_CHARACTERS = "!?";

/* GET count page. */
router.get('/', function(req, res, next) {
  let counts = {};
  let input = req.query.input;

  //We clean the input and make it an array
  let letters = input.toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, "") //separates letters from its modificators and then clears them
    .split('').filter(char => (EXCLUDED_CHARACTERS.indexOf(char)<0));

  //we count each char appearance
  letters.forEach(char => {counts[char] = (counts[char] || 0)+1; });

  res.json(counts);
});

module.exports = router;
