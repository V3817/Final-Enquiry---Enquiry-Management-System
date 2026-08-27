const { enquirymodel } = require("../../models/enquiry.model");
let mongoose = require("mongoose");

// CREATE (Insert New Enquiry)
const enquiryinert = async (req, res) => {
    try {
        let newEnquiry = new enquirymodel(req.body);
        let saved = await newEnquiry.save();
        res.status(201).json({ status: true, message: "Data saved", enquiry: saved });
    } catch (error) {
        console.error("Save error:", error);
        res.status(400).json({
            status: false,
            message: "Data not saved",
            details: error.message
        });
    }
};

// READ (Get All Enquiries)
const enquirydata = async (req, res) => {
    try {
        let all = await enquirymodel.find();
        res.json({
            status: true,                  // This is the key your frontend checks!
            enquiries: all                 // The array your frontend uses!
        });
    } catch (error) {
        console.error("Fetch Error:", error);
        res.status(500).json({
            status: false,
            message: "Failed to fetch enquiry data",
            details: error.message
        });
    }
};

// DELETE (Delete One Enquiry)
const deleten = async (req, res) => {
    let currentId = req.params.id;
    try {
        let mydel = await enquirymodel.deleteOne({ _id: new mongoose.Types.ObjectId(currentId) });
        res.json({
            status: true,
            message: "Deleted successfully",
            result: mydel
        });
    } catch (error) {
        console.error("Delete Error:", error);
        res.status(500).json({
            status: false,
            message: "Failed to delete enquiry data",
            details: error.message
        });
    }
};

// UPDATE (Update One Enquiry)
const updaten = async (req, res) => {
    let currentId = req.params.id;
    let { name, email, phone, message } = req.body;
    try {
        let myupdate = await enquirymodel.updateOne(
            { _id: new mongoose.Types.ObjectId(currentId) },
            { $set: { name, email, phone, message } }
        );
        res.json({
            status: true,
            message: "Updated successfully",
            result: myupdate
        });
    } catch (error) {
        console.error("Update Error:", error);
        res.status(500).json({
            status: false,
            message: "Failed to update enquiry data",
            details: error.message
        });
    }
};

module.exports = { enquiryinert, enquirydata, deleten, updaten };
