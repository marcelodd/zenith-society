var mongoose = require('mongoose');

module.exports = mongoose.model('Event', {
    fromDate: { type: Date, required: 'From Date cannot be blank'},
    toDate: { type: Date, required: 'To Date cannot be blank' },
    isActive: {type: Boolean, default: true},
    createdAt: {type: Date, default: Date.now},
    activityType: { type: Schema.Types.ObjectId, ref: 'ActivityType',required: [true,'Activity type cannot be blank']}
});