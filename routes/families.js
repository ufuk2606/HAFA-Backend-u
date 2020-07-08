const express = require('express');
const router = express.Router();
const { Comment, Family, Meeting, Person, Subject } = require('../database');


router.get('/', function(req, res, next) {
  Family.findAll({
    include: [ Person, Meeting ]
  }).then(family => res.json(family));
});

router.post('/family', function(req, res, next) {
  Family.create(req.body).then(family => res.json(family));
});

router.post('/family/person', function(req, res, next) {
  Family.create(req.body).then(family => res.json(family));
});

router.post('/family/meeting', function(req, res, next) {
  Meeting.create(req.body).then(meeting => res.json(meeting));
});

/*
router.post('/address', function(req, res, next) {

    Address.create({
      street: 'Bahnhofstrasse 20',
      city: 'zollikon',
      zip: '8790',
      country: 'Schweiz',
      UserId: '65eaf13b-0a20-4cd5-95e4-71a7fccd58af'
    })
    .then((address) => res.json(address));

});
*/

module.exports = router;
