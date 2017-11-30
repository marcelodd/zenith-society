const express = require('express');
const router = express.Router();
const ActivityController = require('../controllers/activity');

router.post('/add-activity', ActivityController.createActivity);
router.post('/save-activity', ActivityController.saveActivity);
router.post('/delete-activity', ActivityController.deleteActivity);

module.exports = router;
