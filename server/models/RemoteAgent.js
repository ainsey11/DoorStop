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
        timestamps: true
    }
);

const RemoteAgent = model("RemoteAgent", SCHEMA);

module.exports = RemoteAgent;