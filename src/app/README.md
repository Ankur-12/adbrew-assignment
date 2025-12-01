Adbrew Assignment – TODO App

This is my submission for the Adbrew assignment.
It is a simple TODO app built using:

React (Hooks only)

Node.js + Express

MongoDB

Docker + Docker Compose

 Run the Project
1. Clone & enter project
git clone https://github.com/Ankur-12/adbrew-assignment.git
cd adbrew-assignment

2. Build containers
docker compose build

3. Start all services
docker compose up -d

4. Open in browser

Frontend: http://localhost:3000

Backend: http://localhost:8000/todos

 API Endpoints
Method	Endpoint	Description
GET	    /todos	Fetch all todos
POST	/todos	Create a new todo
✔ Features

Add TODO

Fetch TODO list from MongoDB

Auto-refresh after creating TODO

Fully containerized setup

 Author

Ankur Bhardwaj