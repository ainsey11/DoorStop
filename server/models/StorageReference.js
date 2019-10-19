const { Schema, model} = require("mongoose");

const SCHEMA = new Schema(
    {
    
    
    },
    {
        collection: "RemoteAgents",
        strict: false,
        timestamps: true
    }
);

const RemoteAgents = model("RemoteAgents", SCHEMA);

module.exports = RemoteAgents;