# E-Commerce Project - Backend Laravel, Frontend Vue 3 (Vite)

## 1. Project Introduction

- **Project Name**: E-Commerce System
- **Backend**: Laravel 10
- **Frontend**: Vue 3 (Vite)
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

### 2.2. Client - Vue 3 (Vite)

- **Root Directory**: `Client`
- **Directory Structure**:

  ```plaintext
  client/
  |-- public/            # Static Files
  |-- src/
  |   |-- assets/        # Styling and Assets
  |   |-- components/    # Reusable Vue Components
  |   |-- router/        # Vue Router Setup
  |   |-- store/         # State Management
  |   |-- views/         # Page-Level Vue Components
  |   |-- App.vue        # Main Vue Component
  |   |-- main.js        # Vue Entry Point
  |-- .env               # Environment Configuration
  |-- package.json       # Vue Dependencies
  |-- vite.config.js     # Vite Configuration
  |-- index.html         # HTML Template
  ```
