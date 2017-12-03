const Event = require('../models/event'),
    ActivityType = require('../models/activity-type'),
    moment = require('moment');

let EventController = {
    newEvent: function (req, res) {
        ActivityType.find()
            .then(activities => {
                res.render('pages/new-event', {activities: activities});
            })
    },
    addEvent: function (req, res) {
        let event = Event(req.body);

        event.save()
            .then(result => {
                res.status(200).json('Success!');
            }).catch(err => {
            res.status(404).json('Error: ' + err.message);
        })
    },
    saveEvent: function (req, res) {
        Event.findOneAndUpdate({_id: req.body._id}, {
            date: req.body.date,
            startHour: req.body.startHour,
            endHour: req.body.endHour,
            activityType: req.body.activityType
        }).then(result => {
            res.status(200).json('Success!');
        }).catch(err => {
            res.status(404).json('Error: ' + err.message);
        })
    },
    findAllEvent: function (req, res) {
        Event.find()
            .populate('activityType')
            .exec(function (err, events) {
                res.render('pages/index', {events: events});
            })
    },
    editEvent: function (req, res) {
        ActivityType.find()
            .then(activities => {

                Event.find({_id: req.params.id})
                    .populate('activityType')
                    .exec(function (err, events) {
                        console.log(events[0]);
                        res.render('pages/edit-event', {activities: activities, event: events[0]});
                    })


            })
    },
    deleteEvent: function (req, res) {
        Event.findOneAndRemove({_id: req.body._id})
            .then(result => {
                res.status(200).json('Success!');
            }).catch(err => {
            res.status(404).json('Error: ' + err.message);
        })
    },
    findEventsWeek: function (req, res) {
        try {
            let now = new Date();
            let dayOfWeek = now.getDay();
            let startDate = new Date(now.setDate(now.getDate() + (1 - dayOfWeek)));
            now = new Date(startDate);
            let endDate = new Date(now.setDate(now.getDate() + 7));

            console.log(startDate);
            console.log(endDate);

            Event.find({date: {$gte: startDate, $lt: endDate}, isActive: true})
                .populate('activityType')
                .exec(function (err, events) {
                    res.status(200).json(events);
                }).catch(err => {
                console.log(err);
            })
        } catch (e) {
            console.log(e);
        }
    }
};

module.exports = EventController;