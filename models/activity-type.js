var mongoose = require('mongoose');

module.exports = mongoose.model('ActivityType', {
    description: { type: String, default: '', required: 'Description cannot be blank' },
    createdAt: { type: Date, default: Date.now }
});