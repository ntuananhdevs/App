# DỰ ÁN Thương Mại Điện Tử - Backend Laravel, Frontend React

## 1. Giới Thiệu Dự Án
- **Tên dự án**: Hệ Thống Thương Mại Điện Tử
- **Backend**: Laravel 10
- **Frontend**: ReactJS (Vite)
- **Cơ sở dữ liệu**: MySQL
- **Chức năng chính**:
  - Quản lý sản phẩm, danh mục
  - Hệ thống giỏ hàng và thanh toán
  - Xử lý đơn hàng và trạng thái giao hàng
  - Phân quyền tài khoản người dùng (Admin, User)
  - API để ReactJS kết nối với backend

---

## 2. Cấu Trúc Thư Mục

### 2.1. Backend - Laravel
- **Thư mục gốc**: `backend`
- **Cấu trúc thư mục**:
  ```plaintext
  backend/
  |-- app/               # Code logic chính
  |   |-- Http/
  |       |-- Controllers/   # Controllers
  |       |-- Requests/      # Request Validation
  |-- database/          # Migration, Seeders
  |-- routes/            # Định tuyến API
  |-- .env               # Cấu hình môi trường
  |-- composer.json      # Laravel Dependencies
  ```

### 2.2. Frontend - ReactJS
- **Thư mục gốc**: `frontend`
- **Cấu trúc thư mục**:
  ```plaintext
  frontend/
  |-- src/
  |   |-- components/      # Components tái sử dụng
  |   |-- pages/           # Trang giao diện
  |   |-- services/        # API Services kết nối Backend
  |   |-- hooks/           # Custom Hooks (nếu có)
  |-- public/              # File tĩnh
  |-- package.json         # React Dependencies
  |-- vite.config.js       # Cấu hình Vite
  ```
