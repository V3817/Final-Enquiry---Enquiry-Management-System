Final Enquiry - Backend

This is the Node.js/Express backend API for the Final Enquiry project.
It provides endpoints to create, read, update, and delete enquiries stored in a MongoDB Atlas database.

Features
--------
- Express REST API
- MongoDB Atlas (cloud database) using Mongoose
- CORS enabled for secure frontend API calls
- Ready for deployment on Render.com

Environment Variables
---------------------
Before running, create a .env file in this directory with:

MONGO_URI=mongodb+srv://<username>:<password>@cluster0.xxxxxx.mongodb.net/<dbname>?retryWrites=true&w=majority&appName=Cluster0
PORT=8000

Replace <username>, <password>, and <dbname> with your actual Atlas details.

Local Development
-----------------
1. Install dependencies
   npm install

2. Start the server
   npm start

   The backend will run at http://localhost:8000/

API Endpoints
-------------
POST    /api/en-insert        -- Create a new enquiry
GET     /api/enquirydata      -- List all enquiries
PUT     /api/updaten/:id      -- Update an enquiry
DELETE  /api/deleten/:id      -- Delete an enquiry

Deployment
----------
- Push this folder to a GitHub repo.
- On Render.com:
    - Create a new Web Service
    - Link your GitHub repo
    - Use:
        Build Command: npm install
        Start Command: npm start
    - Add environment variables via the Render dashboard.

Happy coding! For issues, open an Issue on GitHub.
