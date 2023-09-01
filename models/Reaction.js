const { Schema, Types } = require("mongoose");
const moment = require('moment');

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            // Default value is set to a new ObjectId
            default: () => new Types.ObjectId()
        },
        rectionBody: {
            type: String,
            require: true,
            maxlength: 280,
        },
        username: {
            type: String,
            require: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (timestamp) => {
                // use moment to set time format
                return moment(timestamp).format('MM-DD-YYYY, dddd, HH:mm:ss');
            }
        },
    },
    {
        toJSON: {
            getters: true,
        },
        id: false,
    }
);


module.exports = reactionSchema;