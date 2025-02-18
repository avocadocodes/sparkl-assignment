# Online Quiz System 📝🚀
## A full-stack Online Quiz System built with Next.js (App Router, TypeScript) for the frontend and Django REST Framework for the backend.

## 📌 Features
✅ User authentication (JWT-based)
✅ Admin panel for quiz management
✅ Quiz attempt and scoring system
✅ Next.js App Router + Tailwind CSS
✅ Django REST Framework with MySQL

## ⚡ Installation Guide
### 1️⃣ Backend Setup (Django + MySQL)
#### Step 1: Install Dependencies
``` bash
cd backend
python -m venv venv
source venv/bin/activate   
pip install -r requirements.txt
```
#### Step 2: Configure .env File
Create a .env file inside backend/ and add:
``` bash
SECRET_KEY=your_secret_key
DEBUG=True
DATABASE_NAME=quiz_db
DATABASE_USER=root
DATABASE_PASSWORD=your_password
DATABASE_HOST=localhost
DATABASE_PORT=3306

```
#### Step 3: Apply Migrations
``` bash
python manage.py makemigrations
python manage.py migrate
```
#### Step 4: Create a Superuser (Admin)
``` bash
python manage.py createsuperuser
```
#### Step 5: Start Django Server
``` bash
python manage.py runserver
```
### ✅ Backend is running at http://127.0.0.1:8000/

### 2️⃣ Frontend Setup (Next.js + TypeScript)
#### Step 1: Install Dependencies
``` bash
cd frontend
npm install
```
#### Step 2: Configure .env.local File
Create a .env.local file inside frontend/ and add:

``` bash
NEXT_PUBLIC_API_URL=http://127.0.0.1:8000/api 
```
#### Step 3: Start Next.js Server
``` bash
npm run dev
```
✅ Frontend is running at http://localhost:3000/

### 🔥 Usage
Login/Register (/auth/login)
User Dashboard (/dashboard)
Admin Panel (/admin)
Attempt Quizzes (/quiz/{id})

### 🐛 Troubleshooting
#### 1️⃣ Backend Issues

✅ MySQL Not Connecting?
Check .env file for correct DATABASE_USER, DATABASE_PASSWORD.
Ensure MySQL is running (mysql -u root -p).

✅ Django Migration Errors?
Run:
``` bash
python manage.py makemigrations
python manage.py migrate --run-syncdb
```
#### 2️⃣ Frontend Issues
✅ Next.js Not Detecting Backend?

Ensure .env.local is set correctly:
``` bash
NEXT_PUBLIC_API_URL=http://127.0.0.1:8000/api
```
Restart frontend: npm run dev.

✅ AuthContext Not Working?
Ensure AuthProvider is wrapped inside layout.tsx:
``` bash
import { AuthProvider } from "../context/AuthContext";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  );
}
```
### 📜 License
This project is open-source and available under the MIT License.