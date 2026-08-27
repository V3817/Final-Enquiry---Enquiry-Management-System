Final Enquiry - Frontend

This is the React frontend for the Final Enquiry project, a full-stack enquiry management system.

Features
--------
- React (Vite) app with Tailwind CSS styling
- Flowbite React UI Kit
- Toast notifications via react-toastify
- Sweet confirmation dialogs via SweetAlert2
- Connects to REST API backend

Setup
-----
1. Install dependencies
   npm install

2. Start the dev server
   npm run dev

   By default, runs at http://localhost:5173/ (or similar).

Connecting to Backend
---------------------
Edit your API URLs in the frontend code (wherever you use axios/fetch):

Example:
  axios.post('https://final-enquiry-backend.onrender.com/api/en-insert', data)
Update with your deployed backend's URL after deployment.

Deployment
----------
- Push this folder to a GitHub repo.
- On Render.com:
   - Click "New +" > "Static Site"
   - Select this repo
   - Build Command: npm run build
   - Publish Directory: dist (Vite) or build (create-react-app)

Live Demo
---------
- Frontend:  https://your-frontend.onrender.com
- Backend:   https://your-backend.onrender.com

Contributions welcome! For issues, open an Issue on GitHub.
