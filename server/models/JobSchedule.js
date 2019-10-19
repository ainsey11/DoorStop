const { Schema, model} = require("mongoose");

const SCHEMA = new Schema(
    {
    Name: String,
    Schedule: String,
    NextRun: Date,
    LastRun: Date,
    Type: String, //Agent or Pull Based
    State: String
    },
    {
        collection: "Jobs",
        strict: false,
        timestamps: true
    }
);

const Jobs = model("Jobs", SCHEMA);

module.exports = Jobs;