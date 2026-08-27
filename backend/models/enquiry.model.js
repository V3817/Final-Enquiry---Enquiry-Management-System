let mongoose = require("mongoose");

// Schema should be defined with 'type: String', not 'tring'.
// Fields should be separated by commas.
// Boolean should use ':' not '=' in 'required: true' and 'unique: true'.

let Uschema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true
    },
    message: { // fixed typo from 'meage'
        type: String,
        required: true
    }
});

// 'Uschema' as the schema variable, 'enquiry' as collection name.
let enquirymodel = mongoose.model("enquiry", Uschema);

module.exports = { enquirymodel };
