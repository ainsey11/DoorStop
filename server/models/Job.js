const {
    Schema,
    model,
    Types: { ObjectId }
} = require("mongoose");

const SCHEMA = new Schema(
    {
        Name: String,
        Schedule: String,
        NextRun: Date,
        LastRun: Date,
        Type: {
            type: String,
            enum: ["Agent", "Pull", "Push"]
        },
        State: {
            type: String,
            enum: [
                "New",
                "In-Progress",
                "Completed",
                "Errored",
                "Scheduled",
                "Paused"
            ],
            default: "New"
        },
        StorageType: {
            Type: String,
            enum: ["Disk", "Tape", "Azure", "S3"]
        },
        Notification: {
            type: ObjectId,
            ref: "Notification"
        },
        StorageConfiguration: {
            type: ObjectId,
            ref: "StorageConfiguration"
        },
        JobHistory: {
            Type: Array,
            ref: "JobHistory"
        }
    },
    {
        collection: "Jobs",
        timestamps: true
    }
);

const Job = model("Job", SCHEMA);

export default Job;
