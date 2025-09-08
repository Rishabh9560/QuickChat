💬 Chat App (Express + MongoDB + EJS)
A simple chat application built with Node.js, Express, MongoDB, and EJS.
This project demonstrates basic CRUD operations (Create, Read, Update, Delete) using a chat system. Users can send messages, edit them, and delete them. It’s a beginner-friendly project to practice working with databases, routes, and views in Express.

📌 Features
- View all chats
- Create a new chat
- Edit existing chat messages
- Update chats
- Delete chats

- | Method | Route             | Description             |
| ------ | ----------------- | ----------------------- |
| GET    | `/`               | Home page               |
| GET    | `/chats`          | Show all chats          |
| GET    | `/chats/new`      | Form to create new chat |
| POST   | `/chats`          | Create new chat         |
| GET    | `/chats/:id/edit` | Edit chat form          |
| PUT    | `/chats/:id`      | Update chat             |
| DELETE | `/chats/:id`      | Delete chat             |


🛠️ Tech Stack
Node.js
Express.js
MongoDB + Mongoose
EJS
Method-Override
