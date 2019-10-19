const mongoose = require("mongoose");

// Get Variables
MONGO_URL = "mongodb://localhost:27017/DoorStop" || process.env.MONGO_URL;

const boot = async (callback) => {
    console.log("Booting DoorStop..")
    try {
        await mongoose.connect(MONGO_URL, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: true,
            useUnifiedTopology: true
        });
        console.log("Connected to MongoDB");
        callback();
    } catch(error) {
        callback(error);
    }
}
boot((error) => {
    if (error) {
        console.error(error.message || error);
    }
});