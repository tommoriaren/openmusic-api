# OpenMusic API 🎵 – Version 2

OpenMusic API is a RESTful backend service built to support an open-source music streaming application.

This repository represents **OpenMusic API – Version 2**, an enhanced version of the initial backend with Authentication, Authorization, Database Normalization, and Playlist management.

---

## 🚀 Project Overview

OpenMusic is an open music platform designed to provide free-licensed music for everyone.

After the successful release of Version 1 (Album & Song management), the platform experienced rapid growth. Thousands of free-licensed songs were added to the system.

However, users faced difficulty managing and organizing songs across various genres such as rock, pop, dangdut, and RnB.

To solve this issue, Version 2 introduces a **private playlist system** with secure authentication and authorization.

---

## 🧩 Problem Statement

With the increasing number of songs in the platform:

- Users struggled to manage their favorite songs
- All genres were mixed together
- Users wanted personalized music collections
- Playlist access needed to be private and secure

Additionally, users requested:

- Private playlists
- Secure authentication
- Optional playlist collaboration feature

---

## 🛠️ Solution

OpenMusic API Version 2 introduces:

- Token-Based Authentication (JWT)
- Authorization (Private playlist access control)
- Database normalization improvements
- Relational data retrieval using JOIN queries
- Playlist management features
- Optional collaboration support

The backend follows a clean layered architecture:

- **Handler Layer** – HTTP request handling
- **Service Layer** – Business logic & database interaction
- **Validator Layer** – Request payload validation
- **Migration Layer** – Versioned database schema evolution

---

## ✨ Features

### 🎼 Albums
- Create album
- Retrieve album details
- Update album
- Delete album

### 🎵 Songs
- Create song
- Retrieve song list with filtering
- Retrieve song details
- Update song
- Delete song

### 👤 Users
- Register user
- Login user
- JWT token generation

### 🔐 Authentication & Authorization
- Token-Based Authentication
- JWT access token
- Private route protection
- Playlist ownership verification

### 📂 Playlists
- Create playlist (private)
- Add songs to playlist
- Remove songs from playlist
- Retrieve playlist details (with JOIN)
- Optional collaboration support

---

## 🧱 Tech Stack

- Node.js
- Express
- PostgreSQL
- node-pg-migrate (Database migration)
- Joi (Data validation)
- JWT (Token-based authentication)
- dotenv (Environment configuration)

---

## 🏗 Architecture Principles

- RESTful API design
- Separation of concerns
- Normalized relational database design
- Secure authentication flow
- Role-based access control
- Scalable project structure

---

## ⚙️ Installation

Install dependencies:

```bash
npm install
```

Create .env file:
```
HOST=localhost
PORT=5000

PGHOST=localhost
PGPORT=5432
PGUSER=your_user
PGPASSWORD=your_password
PGDATABASE=openmusic

ACCESS_TOKEN_KEY=your_access_token_key
REFRESH_TOKEN_KEY=your_refresh_token_key
ACCESS_TOKEN_AGE=1800
REFRESH_TOKEN_AGE=604800
```

Run migration:
```
npm run migrate up
```

Start server:
```
npm run start
```

---

## 🧠 What This Project Demonstrates

Designing scalable RESTful APIs
Implementing Token-Based Authentication using JWT
Securing private resources with Authorization
Applying database normalization
Using SQL JOIN to retrieve relational data
Clean modular backend architecture

---

## 🔄 Version Comparison
Version 1
- Albums & Songs CRUD
- Basic data validation
- Migration-based schema management

Version 2
- User Authentication (JWT)
- Authorization (Private playlists)
- Playlist management
- Normalized relational schema
- Secure route protection

---

## 🎓 Learning Context

This project was developed as part of backend learning modules covering:
- Authentication & Authorization
- Token-Based Authentication (JWT)
- Database Normalization
- Relational data queries using JOIN

---

## 📌 Future Improvements

- Playlist activity log
- Playlist collaboration expansion
- Caching layer
- Asynchronous export feature
- Message queue integration

---

