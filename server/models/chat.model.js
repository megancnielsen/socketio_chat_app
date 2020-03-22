const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: [true, "User is required"],
        minlength: [2, "User's name must be at least 2 characters"]
    },
}, {timestamps: true});

module.exports = mongoose.model("User", UserSchema);