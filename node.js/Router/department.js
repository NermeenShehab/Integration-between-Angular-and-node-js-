const express = require("express");
const Department = require("../models/departments")
const bcrypt = require("bcrypt");
const auth = require("../middleware/auth")

const router = express.Router();

//try auth get 
// router.get("/", auth, async(req, res) => {
router.get("/", async(req, res) => {
    const departments = await Department.find();
    res.json(departments)
})


router.get("/:id", async(req, res) => {
    const id = req.params.id
    const department = await Department.findById(id);
    res.json(department)
})

router.post("/", async(req, res) => {
    const { name, capacity } = req.body
    const department = await new Department({ name, capacity }).save()
    res.json({ name: department.name, capacity: department.capacity })
})





router.put("/:id", async(req, res) => {
    const id = req.params.id
    const { name, capacity } = req.body
    const department = await Department.findByIdAndUpdate(id, { name, capacity }, { new: true });
    res.json(department)
})

router.delete("/:id", async(req, res) => {
    const id = req.params.id
    const department = await Department.findByIdAndDelete(id);
    res.json(department)
})


module.exports = router