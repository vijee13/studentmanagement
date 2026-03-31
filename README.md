# Ezovion Student Management System

A premium full-stack application developed for the Ezovion assignment, featuring a .NET 6 Web API backend and an Angular frontend.

## 🚀 Tech Stack

- **Backend**: C# .NET 6, Entity Framework Core, SQL Server
- **Frontend**: Angular, Reactive Forms, Vanilla CSS (Premium Design System)
- **Database**: Microsoft SQL Server (LocalDB)

## 📋 Requirements & Features

### 1. Database & API
- **SQL Table**: `Students` table with all required fields (Id, Name, DOB, Marks, CGPA, Mobile, Address, Email, Course, GradYear).
- **CRUD Service**: Full Create, Read, Update, and Delete support through a robust REST API.
- **Auto-Config**: The API automatically creates the database and table on first run using `EnsureCreated()`.

### 2. Frontend & Validations
- **Modern UI**: Polished design with glassmorphism, smooth animations, and a responsive layout.
- **Strict Validations**:
  - **Name**: Alphabets and spaces only.
  - **DOB**: Cannot be a future date.
  - **Mobile**: Exactly 10 digits.
  - **CGPA**: Supports decimal values (e.g., 9.85).
  - **Graduation Year**: Validates with the current year (past/present only).
  - **Email**: Standard email pattern validation.

---

## 🛠️ Getting Started

### 1. Prerequisites
- [.NET 6 SDK](https://dotnet.microsoft.com/en-us/download/dotnet/6.0)
- [Node.js & npm](https://nodejs.org/)
- [SQL Server Express LocalDB](https://learn.microsoft.com/en-us/sql/database-engine/configure-windows/sql-server-express-localdb) (Recommended)

### 2. Backend Setup (.NET API)
1. Open a terminal in the `StudentAPI` folder.
2. Run the following command:
   ```bash
   dotnet run
   ```
3. The API should be running on `http://localhost:5000` (or the console output will specify the port).
4. **Database Note**: The application uses `(localdb)\mssqllocaldb`. To use a different server, update the `DefaultConnection` in `appsettings.json`.

### 3. Frontend Setup (Angular)
1. Open a terminal in the `student-frontend` folder.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
4. Navigate to `http://localhost:4200` in your browser.

---

## 📸 Screenshots & Highlights

- **Dashboard**: A clean, tabulated view of all student records with instant action buttons.
- **Smart Forms**: Real-time error feedback ensures data integrity before submission.
- **Confirm Deletions**: Prevents accidental data loss with a custom-styled modal.

---

*Developed by Antigravity (Powered by Google DeepMind)*
