# E-Commerce Project - Backend Laravel, Frontend Vue 3

## 1. Project Introduction
- **Project Name**: E-Commerce System
- **Backend**: Laravel 10
- **Frontend**: Vue 3 (Composition API)
- **Database**: MySQL
- **Main Features**:
  - Manage products, categories
  - Shopping cart and payment system
  - Order processing and delivery status
  - User account permissions (Admin, User)
  - API for ReactJS to connect with the backend

---

## 2. Directory Structure

### 2.1. Backend - Laravel
- **Root Directory**: `backend`
- **Directory Structure**:
  ```plaintext
  backend/
  |-- app/                  # App Logic
  |   |-- Http/
  |       |-- Controllers/   # Controller Logic
  |       |-- Requests/      # Request Logic
  |-- database/          # Database Structure
  |-- routes/            # API Routing
  |-- .env               # Environment Configuration
  |-- composer.json      # Laravel Dependencies
  ```

### 2.2. Client - Vue 3
- **Root Directory**: `Client`
- **Directory Structure**:
  ```plaintext
  Client/
  |-- public/            # Static Files
  |-- src/               # Vue Components
  |-- .env               # Environment Configuration
  |-- package.json      # Vue Dependencies
  |-- vite.config.js    # Vite Configuration  
  |-- index.html         # HTML Template
  |-- main.js            # Vue Entry Point
  ```