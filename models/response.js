const { mongoose } = require('mongoose');
const { Schema } = mongoose;

const responseScheme = new Schema({
    _id: {
        type: mongoose.Types.ObjectId
    },
    key: {
        type: String,
        required: true
    },
    replyMessage: {
        type: String,
        required: true
    }
});

const Response = mongoose.model('response', responseScheme, 'response');

module.exports = Response;