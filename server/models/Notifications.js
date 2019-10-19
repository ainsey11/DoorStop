const { Schema, model} = require("mongoose");

const SCHEMA = new Schema(
    {
    Name: String,
    Type: {
        type: String,
        enum: ["E-Mail","Slack","WebHook"]
    },
    SMTPTo: String,
    SMTPFrom: String,
    SMTPServer: String,
    SMTPUseSSL: Boolean,
    SMTPPort: Int16Array,
    SlackURL: String,
    WebHookURL: String,
    },
    {
        collection: "Notifications",
        strict: false,
        timestamps: true
    }
);

const Notifications = model("Notifications", SCHEMA);

module.exports = Notifications;