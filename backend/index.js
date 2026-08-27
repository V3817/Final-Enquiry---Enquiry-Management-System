let express = require("express");
let mongoose = require("mongoose");
let cors = require("cors");
let app = express();
app.use(cors());

require("dotenv").config();
// Import the route file
const enquiryRoutes = require('./routes/routes');
const { enquirymodel } = require("./models/enquiry.model");

mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("connected to mongodb");
}).catch(err => {
    console.error("MongoDB connection error:", err);
});

app.use(express.json());

// Mount your routes here
app.use('/api', enquiryRoutes);

app.listen(process.env.PORT || 3000, () => {
    console.log("server started");
});
