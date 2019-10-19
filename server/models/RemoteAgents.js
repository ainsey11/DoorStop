const { Schema, model} = require("mongoose");

const SCHEMA = new Schema(
    {
    IPAddress: String,
    Name: String,
    OperatingSystem: String,
    LastActive: Date,
    Version: Int16Array,
    APIKey: String
    },
    {
        collection: "RemoteAgents",
        strict: false,
        timestamps: true
    }
);

const RemoteAgents = model("RemoteAgents", SCHEMA);

module.exports = RemoteAgents;