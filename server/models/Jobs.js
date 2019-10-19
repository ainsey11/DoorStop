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
    StorageRef: Object,
    Notification: Object
    },
    {
        collection: "Jobs",
        strict: false,
        timestamps: true
    }
);

const Jobs = model("Jobs", SCHEMA);

module.exports = Jobs;