const { Schema, model} = require("mongoose");

const SCHEMA = new Schema(
    {
    Name: String,
    Type: {
        type: String,
        enum: ["Disk","Tape","Azure","S3"]
    },
    DiskPath: String,


    },
    {
        collection: "StorageConfigurations",
        timestamps: true
    }
);

const Notifications = model("StorageConfiguration", SCHEMA);

module.exports = Notification;