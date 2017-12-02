var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var eventSchema = new Schema({
    date: {type: Date, required: 'Date cannot be blank'},
    startHour: {type: String, required: 'Start hour cannot be blank'},
    endHour: {type: String, required: 'End hour cannot be blank'},
    isActive: {type: Boolean, default: true},
    createdAt: {type: Date, default: Date.now},
    activityType: {type: Schema.Types.ObjectId, ref: 'ActivityType', required: [true, 'Activity type cannot be blank']}
});

// the schema is useless so far
// we need to create a model using it
var Event = mongoose.model('Event', eventSchema);

// make this available to our users in our Node applications
module.exports = Event;