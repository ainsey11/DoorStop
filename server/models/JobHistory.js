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
        TotalRunTime: String,
        StartTime: String,
        EndTime: String,
        FinishedState: {
            type: String,
            enum: ["Error", "Success", "Cancelled"]
        },
        FileLog: {
            type: ObjectId,
            ref: "FileLog"
        }
    },
    {
        collection: "JobHistories",
        timestamps: true
    }
);

const JobHistory = model("JobHistory", SCHEMA);

module.exports = JobHistory;
