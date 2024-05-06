const mongoose = require('mongoose');

const groupSchema = new mongoose.Schema({
    name: String,
    code: Number
});

const GroupModel = mongoose.model('Group', groupSchema);

module.exports = GroupModel;
