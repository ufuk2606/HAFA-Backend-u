const express = require('express');
const router = express.Router();
const {
  Comment,
  Family,
  Meeting,
  Person,
  Subject
} = require('../database');
const SubjectService = require('../services/SubjectService');
// yukaridaki db den ihtiyacin olmayani en sonnunda silmeyi unutma

router.get('/findAll/:userId', function (req, res, next) {
  const userId = req.params.userId;
  Meeting.findAll({
    where: {
      PersonId: userId
    },
    include: [Subject]
  }).then(meeting => res.json(meeting));
});

router.post('/meeting', function (req, res, next) {
  Meeting.create(req.body).then(meeting => res.json(meeting));
});

router.post('/meeting/subject', function (req, res, next) {
  SubjectService.create(req.body)
    .then(subject => res.json(subject));
  Subject.create(req.body).then(subject => res.json(subject));
});

router.get('/meeting/subject', function (req, res, next) {
  SubjectService.findAll()
    .then(subject => res.json(subject));
});

router.post('/meeting/subject/comment', function (req, res, next) {
  Comment.create(req.body).then(comment => res.json(comment));
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
