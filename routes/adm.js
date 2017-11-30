var express = require('express');
var router = express.Router();
const ActivityController = require('../controllers/activity');

/*Pages*/
router.get('/', function (req, res, next) {
    res.render('pages/index', {title: 'Express'});
});

router.get('/new-event', function (req, res, next) {
    res.render('pages/new-event', {title: 'Express'});
});

router.get('/new-activity', function (req, res, next) {
    res.render('pages/new-activity', {title: 'Express'});
});

router.get('/edit-activity/:id', ActivityController.editActivity);

router.get('/activities', ActivityController.findAllActivity);


module.exports = router;
