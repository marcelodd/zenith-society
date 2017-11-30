var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var activityTypeSchema = new Schema({
    description: { type: String, default: '', required: 'Description cannot be blank' },
    createdAt: { type: Date, default: Date.now }
});

// the schema is useless so far
// we need to create a model using it
var ActivityType = mongoose.model('ActivityType', activityTypeSchema);

// make this available to our users in our Node applications
module.exports = ActivityType;