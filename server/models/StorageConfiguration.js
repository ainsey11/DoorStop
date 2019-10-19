const { Schema, model} = require("mongoose");

const SCHEMA = new Schema(
    {
    Name: String,
    Type: {
        type: String,
        enum: ["Disk","Tape","Azure","S3"]
    },
    DiskPath: String,
    DiskCompression: Boolean,
    TapeAutoChanger: Boolean,
    TapeChangerDeviceID: String, //ie /dev/sch0
    TapeDriveDeviceID: String, // ie /dev/st0
    TapeMediaType: String,
    TapeCompression: Boolean,
    TapeAutomaticMount: Boolean,
    TapeAlwaysOpen: Boolean,
    AzureAccountName: String,
    AzureAccountKey: String,
    AzureCompression: Boolean,
    S3Url: String,
    S3AccessKey: String,
    S3SecretKey: String,
    S3Bucket: String,
    S3UseSSL: Boolean,
    S3Compression: Boolean
    },
    {
        collection: "StorageConfigurations",
        timestamps: true
    }
);

const StorageConfiguration = model("StorageConfiguration", SCHEMA);

module.exports = StorageConfiguration;