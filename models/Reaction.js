const { Schema, Types } = require("mongoose");

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
            // get
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