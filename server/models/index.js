const RemoteAgent = require("./RemoteAgent");
const Job = require("./Job");
const JobHistory = require("./JobHistory");
const Notification = require("./Notification");
const StorageConfiguration = require("./StorageConfiguration");
const FileLog = require("./FileLog");

const EXPORTS = {
    RemoteAgent,
    Job,
    JobHistory,
    Notification,
    StorageConfiguration,
    FileLog
};

module.exports = EXPORTS;
exports = EXPORTS;
exports.default = EXPORTS;
