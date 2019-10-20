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
        FilesBackedUp: [
            {
                Name: String,
                Path: String,
                Size: Int32Array
            }
        ]
    },
    {
        collection: "JobHistories",
        timestamps: true
    }
);

const FileLog = model("FileLogs", SCHEMA);

module.exports = FileLog;
