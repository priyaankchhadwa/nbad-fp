var mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
    userId: {
        type: Number,
        required: [true, "UserId is mandatory"]
    },

    firstName: {
        type: String,
        required: [true, "First name is mandatory"]
    },
    lastName: {
        type: String,
        required: [true, "Last name is mandatory"]
    },
    username: String,
    email: String,
    password: String,
    isAdmin: {
        type: Boolean,
        required: [true],
        default: false
    }
});

module.exports = mongoose.model("users", userSchema);