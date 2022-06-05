const mongoose = require("mongoose");
const schema = new mongoose.Schema({
    // username: { type: String, require: true },
    // email: String,
    // password: String,

    name: String,
    capacity: Number,
})
const Department = mongoose.model("Department", schema);
module.exports = Department;