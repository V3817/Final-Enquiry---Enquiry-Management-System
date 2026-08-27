Final Enquiry - Enquiry Management System

Description
-----------
Final Enquiry is a full-stack web application for managing customer or user enquiries.
It features a modern React frontend with a Node.js + Express backend and a MongoDB Atlas database.

Users can create, view, update, and delete enquiry records through a simple and attractive web UI.

Features
--------
- Full CRUD (Create, Read, Update, Delete) for enquiries
- Modern responsive frontend built with React, Vite, Tailwind CSS, and Flowbite UI components
- SweetAlert2 popups for confirmation, Toastify for notifications
- RESTful API backend with Node.js, Express, and Mongoose (MongoDB)
- Connects to MongoDB Atlas (cloud) or local MongoDB
- Easily deployable to Render.com or other platforms

Project Structure
-----------------
final_enquiry/
├── backend/         # Express API server
│   ├── index.js
│   ├── package.json
│   ├── .env.example
│   └── ... (other backend files and folders)
└── frontend/        # React Vite frontend
    ├── src/
    ├── vite.config.js or package.json
    └── ... (other frontend files and folders)

Quick Start - Local Setup
-------------------------
Requirements:
- Node.js and npm installed
- (Optional) MongoDB installed locally, or a MongoDB Atlas account

Steps:
1. Clone the repo and enter the project directory.
   git clone <project-url>
   cd final_enquiry

2. Set up the backend (API server):
   cd backend
   npm install

3. Create a .env file in the backend folder:
   See `.env.example` for the required variables, e.g.
       MONGO_URI=your-mongo-uri-here
       PORT=8000

   - For local testing, you can use your local Mongo URI
     MONGO_URI=mongodb://localhost:27017/finalenquiry
   - For cloud, use your MongoDB Atlas connection string.

4. Start the backend:
   npm start
   (Runs the API at http://localhost:8000/)

5. Set up the frontend:
   cd ../frontend
   npm install

6. Configure the frontend API base URL:
   - In your frontend source code, update all axios/fetch URLs to point to your backend API,
     for example:
       axios.post("http://localhost:8000/api/en-insert", ...)
   - If you use environment variables for the frontend, set them as needed (depends on your setup).

7. Start the frontend:
   npm run dev
   (Runs the frontend at http://localhost:5173/ or similar)

8. Open the app in your web browser and use all enquiry operations.

API Endpoints (Backend)
-----------------------
POST    /api/en-insert        Create a new enquiry
GET     /api/enquirydata      Get all enquiries
PUT     /api/updaten/:id      Update an enquiry by ID
DELETE  /api/deleten/:id      Delete an enquiry by ID

Deployment (Render)
-------------------
You can deploy both backend (Web Service) and frontend (Static Site) on Render.com.

- Push this monorepo to GitHub.
- When connecting to Render, specify "Root Directory" as "backend" for the backend service and "frontend" for the frontend static site.
- For backend, add environment variables like MONGO_URI via the Render dashboard.
- For frontend, update API URLs to use the deployed backend's Render URL.

Tech Stack
----------
- Frontend: React, Vite, Tailwind CSS, Flowbite, Toastify, SweetAlert2
- Backend: Node.js, Express, Mongoose
- Database: MongoDB Atlas (recommended) or local MongoDB

Local Development Tips
----------------------
- Always start the backend first before using the frontend.
- All data will be visible in your MongoDB instance (cloud or local).
- To reset all data, you can clear the MongoDB database.

License
-------
This project is open-source and free to use for learning, modification, or as a starter for your own enquiry management projects.

