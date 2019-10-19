const { Schema, model} = require("mongoose");

const SCHEMA = new Schema(
    {
    Name: String,
    Schedule: String,
    NextRun: Date,
    LastRun: Date,
    Type: {
        type: String,
        enum: ["Agent","Pull","Push"]
    },
    State: {
        type: String,
        enum: ["New","In-Progress","Completed","Errored","Scheduled","Paused"],
        default: "New",
    },
    StorageType: {
        Type: String,
        enum: ["Disk","Tape","Azure","S3"]
    },
    Notification: {
        type: mongoose.Types.ObjectId,
        ref: "Notification"
    },
    StorageConfiguration: {
        type: mongoose.Types.ObjectId,
        ref: "StorageConfiguration"
    }
    },
    {
        collection: "Jobs",
        timestamps: true
    }
);

const Jobs = model("Job", SCHEMA);

module.exports = Job;