# OBT

An online testing platform built with Node.js, Express, MongoDB, and React.

This repository contains a backend API server and a frontend React application for building, taking, and reviewing exams.

## Project Structure

- `Backend/` - Express API server and MongoDB connection logic
- `frontend/` - React + Vite user interface

## Prerequisites

- Node.js 18+ or compatible version
- npm or yarn
- MongoDB instance (local or hosted)

## Backend Setup

1. Open a terminal in `Backend/`
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in `Backend/` with at least the following variables:
   ```env
   MONGO_URL=<your-mongodb-connection-string>
   PORT=5000
   ```
4. Start the backend server:
   ```bash
   npm start
   ```
5. The API should be running at `http://localhost:5000`

## Frontend Setup

1. Open a terminal in `frontend/`
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open the URL shown by Vite, typically `http://localhost:5173`

## Notes

- The frontend consumes API routes exposed by the backend.
- If using separate backend and frontend origins, ensure CORS is allowed in the backend.
- The backend uses `nodemon` for automatic restart during development.

## Useful Commands

Backend:
```bash
cd Backend
npm start
```

Frontend:
```bash
cd frontend
npm run dev
```

## Troubleshooting

- If the backend fails to connect, verify `MONGO_URL` is correct.
- If the frontend cannot reach the backend, check the API base URL and CORS settings.
# Online-Based-Test-Application
