const {
    Schema,
    model,
    Types: { ObjectId }
} = require("mongoose");

const SCHEMA = new Schema(
    {
        Job: {
            type: ObjectId,
            ref: "Job"
        },
        TotalFiles: Int32Array,
        TotalSize: Int32Array,
        FilesBackedUp: Array
    },
    {
        collection: "JobHistories",
        timestamps: true
    }
);

const JobHistory = model("JobHistory", SCHEMA);

module.exports = JobHistory;
