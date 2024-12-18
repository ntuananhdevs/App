# E-Commerce Project - Backend Laravel, Frontend React

## 1. Project Introduction
- **Project Name**: E-Commerce System
- **Backend**: Laravel 10
- **Frontend**: ReactJS (Vite)
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

### 2.2. Frontend - ReactJS
- **Root Directory**: `frontend`
- **Directory Structure**:
  ```plaintext
  frontend/
  |-- src/
  |   |-- components/       # ReactJS Components
  |   |-- pages/            # ReactJS Pages
  |   |-- services/         # Service Logic
  |   |-- hooks/            # Hook Logic
  |-- public/              # Static Files
  |-- package.json         # ReactJS Dependencies
  |-- vite.config.js       # Vite Config
  ```