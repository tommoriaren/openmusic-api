# OpenMusic API 🎵

OpenMusic API is a RESTful backend service built to support an open-source music streaming application.  
This project demonstrates clean backend architecture, database migration, and data validation using modern Node.js practices.

---

## 🚀 Project Overview

OpenMusic is an open music platform designed to provide free-licensed music for everyone.  
The application is developed incrementally, starting from a solid backend foundation.

This repository represents **OpenMusic API – Version 1**, focusing on core data management features for albums and songs.

---

## 🧩 Problem Statement

At the early stage of development, OpenMusic required a reliable backend API to:
- Store and manage album data
- Store and manage song data
- Ensure data consistency and validation
- Support future feature expansion (playlists, sharing, collaboration)

The challenge was to design a backend that is **simple, scalable, and maintainable**.

---

## 🛠️ Solution

This API was built with a clear separation of concerns:
- **Handler Layer** – HTTP request handling
- **Service Layer** – Business logic and database interaction
- **Validator Layer** – Request payload validation

Database schema changes are handled through **migration scripts**, ensuring versioned and repeatable database evolution.

---

## ✨ Features

### Albums
- Create album
- Retrieve album details
- Update album
- Delete album

### Songs
- Create song
- Retrieve song list with filtering
- Retrieve song details
- Update song
- Delete song

---

## 🧱 Tech Stack

- **Node.js**
- **Express**
- **PostgreSQL**
- **node-pg-migrate** (Database migration)
- **Joi** (Data validation)
- **dotenv** (Environment configuration)

---

## 🗂️ Project Structure

src/
├── api/ # HTTP layer (handlers & routes)
├── services/ # Business logic & database access
├── validator/ # Joi schemas & validation logic
├── exceptions/ # Custom error handling
├── utils/ # Helper utilities
├── database/
│ └── migrations/ # Database migration files
└── server.js
