# Anantadi Video App

Anantadi Video App is a video streaming platform where users can watch, upload, and share videos. The app provides a seamless experience for video playback, with features like user authentication, video uploading, and commenting.

## Features

- User authentication (Login/Signup)
- Video upload and storage
- Video playback with controls (play, pause, seek)
- Comments on videos
- Responsive design for mobile and desktop

## Tech Stack

- **Frontend**: React.js, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **Video Storage**: Google Drive

## Setup

### Prerequisites

Before you start, make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- MongoDB (or a cloud MongoDB service like [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))
- Google Drive (for video storage)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Ranjan095/anantadi_video_app.git

2. **Navigate to the backend directories**:
   ```bash
   cd backend
3. **Create .env files in backend directories with the following content.**:

   ```bash
   MONGO_URL=<your_mongodb_connection_url>
   PORT=8080
   JWT_SECRET=<your_jwt_secret_key>
4. **Install dependencies:**:

   ```bash
   npm install
5. **Run the backend server:**:

   ```bash
   npm run server
6. **Navigate to the frontend directories**:
   ```bash
   cd frontend
7. **Install dependencies:**:

   ```bash
   npm install
8. **Run the frontend development server:**:

   ```bash
   npm run dev
9. **Open the app in your browser:**:

   ```bash
   http://localhost:5173/
   