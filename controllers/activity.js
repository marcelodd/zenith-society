const ActivityType = require('../models/activity-type');

let ActivityController = {
    createActivity: function (req, res) {
        var activityType = ActivityType(req.body);

        activityType.save()
            .then(result => {
                ActivityController.findAllActivity(req, res);
            });
    },
    findAllActivity: function (req, res) {
        ActivityType.find()
            .then(activities => {
                console.log(activities);
                res.render('pages/activities', {activities: activities, selectedId: null});
            })
    },
    editActivity: function (req, res) {
        ActivityType.find({_id: req.params.id})
            .then(activity => {
                //console.log(activity);
                res.render('pages/edit-activity', {activity: activity[0]});
            })
    },
    saveActivity: function (req, res) {
        ActivityType.findOneAndUpdate({_id: req.body._id}, {description: req.body.description})
            .then(result => {
                res.status(200).json('Success!');
            }).catch(err => {
            res.status(404).json('Error: ' + err.message);
        })
    },
    deleteActivity: function (req, res) {
        ActivityType.findOneAndRemove({_id: req.body._id})
            .then(result => {
                res.status(200).json('Success!');
            }).catch(err => {
            res.status(404).json('Error: ' + err.message);
        })
    },
}

module.exports = ActivityController;