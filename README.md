
# Greeting App

A simple full-stack application with a backend API and a frontend form to get a personalized greeting.

## Tech Stack
- Backend: Node.js + Express
- Frontend: React (Vite) + Bootstrap
- Deployment: Render

## Folder Structure
```
greeting-app/
├── backend/     # Express server
├── frontend/    # React app
```

## Backend Setup
```bash
cd backend
npm install
npm run dev
```

## Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

## API Endpoint
```http
GET /api/greet?name=YourName
```



## Deployment Instructions
- Backend: Deploy as **Web Service** on Render
- Frontend: Deploy as **Static Site** on Render with:
    - Build Command: `npm run build`
    - Publish Directory: `dist`
