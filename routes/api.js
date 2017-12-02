const express = require('express');
const router = express.Router();
const ActivityController = require('../controllers/activity');
const EventController = require('../controllers/event');

router.post('/add-activity', ActivityController.createActivity);
router.post('/save-activity', ActivityController.saveActivity);
router.post('/delete-activity', ActivityController.deleteActivity);

router.post('/add-event', EventController.addEvent);
router.post('/save-event', EventController.saveEvent);
router.post('/delete-event', EventController.deleteEvent);

router.get('/events-week', EventController.findEventsWeek);

module.exports = router;
