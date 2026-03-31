# Assignment by Ezovion

## API Development (using C#)

### Aim

To develop an API for the given requirement using C# with .NET 6 framework.

---

### Requirement

#### 1. DB Installation

- Microsoft SQL v18.12.1

#### 2. Create a New Database and Student Table

| Field Name     | Datatype       | Constraint              | Sample Values                        |
|----------------|----------------|-------------------------|--------------------------------------|
| Id             | int            | Primary Key, Auto Increment | 1, 2, 3, ...                     |
| Name           | varchar(50)    | Not Null                | siva, Rama, ...                      |
| DOB            | DateTime       | Not Null                | 11-12-2000T11:45, ...                |
| TotalMarks     | int            | Not Null                | 452, 500, ...                        |
| CGPA           | float(4,2)     | Not Null                | 40.52, 68.7, ...                     |
| Mobile         | varchar(10)    | Not Null                | Mobile Number (10 digit)             |
| Address        | varchar(250)   | Null                    | Address of the Student (no constraint) |
| Email          | varchar(50)    | Not Null                | abc@gmail.com, ...                   |
| Course         | varchar(10)    | Not Null                | B.E, B.Tech, M.E, ...                |
| GraduationYear | varchar(4)     | Not Null                | 2024, 2026, ...                      |

#### 3. CRUD API

Develop an API for the above Student model class with all **CRUD operations** (Create, Read, Update, Delete).

---

## Frontend Validations (Angular)

| Field          | Validation Rule                        |
|----------------|----------------------------------------|
| ID             | Should not be editable                 |
| Name           | Allow alphabets only                   |
| DOB            | Should not allow future dates          |
| Total Marks    | Numeric values only                    |
| CGPA           | Accept numeric / decimal values        |
| Mobile         | Must be exactly 10 digits              |
| Email          | Must follow email pattern              |
| Course         | Alphabets only                         |
| Graduation Year| Accept past years only                 |
