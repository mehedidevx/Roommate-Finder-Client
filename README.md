Roommate Finder Website
Live Site URL:  https://roommate-finder-e3166.web.app


Project Overview
Roommate Finder is a React.js based web application that helps users find compatible roommates based on their preferences. Users can create profiles, browse roommate listings, add new posts, and connect with others.

Features
User Authentication: Email/password login and Google login using Firebase Authentication.

Add Roommate Listing: Users can add new roommate posts with detailed information.

Browse Listings: View roommate listings posted by all users.

My Listings: Users can view, update, and delete their own posts.

Like Feature: Users can like posts to increase like count and reveal contact information.

Protected Routes: Certain pages are accessible only to logged-in users.

Responsive Design: Works smoothly on mobile, tablet, and desktop devices.

Dark/Light Mode Toggle: Users can switch between dark and light themes on the homepage.

Animated UI: Implemented with React Awesome Reveal, React-simple-typewriter, and React-tooltip.

Technologies Used
Frontend: React.js, React Router DOM, Firebase Authentication

State Management: React Context API / React Hooks

Styling: CSS / Tailwind CSS / Styled Components (based on your preference)

Notifications: React Toastify / SweetAlert2

Animations: React Awesome Reveal, React-simple-typewriter, React-tooltip

Deployment: Netlify (Client-side)

Folder Structure
bash
Copy
Edit
/src
  /components
  /pages
  /contexts
  /utils
  App.js
  index.js
Environment Variables
Store the following in a .env file (do not commit this file):

ini
Copy
Edit
REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
REACT_APP_API_BASE_URL=your_backend_api_url
Installation and Running Locally
bash
Copy
Edit
git clone https://github.com/yourusername/roommate-finder-client.git
cd roommate-finder-client
npm install
npm start
Available Scripts
npm start: Runs the development server

npm run build: Builds the app for production

Contribution Guidelines
Minimum 15 meaningful GitHub commits on the client side are required.

Follow best practices and add comments where necessary.

Contact
Email: mehedi.devx@gmail.com
