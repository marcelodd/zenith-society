var express = require('express');
var router = express.Router();
const ActivityController = require('../controllers/activity');
const EventController = require('../controllers/event');

/*Pages*/
router.get('/events', EventController.findAllEvent);

router.get('/new-event', EventController.newEvent);

router.get('/new-activity', function (req, res) {
    res.render('pages/new-activity');
});

router.get('/edit-activity/:id', ActivityController.editActivity);
router.get('/activities', ActivityController.findAllActivity);

router.get('/edit-event/:id', EventController.editEvent);


module.exports = router;
