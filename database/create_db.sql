-- Run this script in SQL Server Management Studio (SSMS) or Azure Data Studio
-- Only needed if NOT using EF Core auto-migration in Program.cs

-- Create the database
IF NOT EXISTS (SELECT name FROM sys.databases WHERE name = 'StudentDB')
BEGIN
    CREATE DATABASE StudentDB;
END
GO

USE StudentDB;
GO

-- Create Students table
IF NOT EXISTS (SELECT * FROM sysobjects WHERE name='Students' AND xtype='U')
BEGIN
    CREATE TABLE Students (
        Id             INT           PRIMARY KEY IDENTITY(1,1),
        Name           VARCHAR(50)   NOT NULL,
        DOB            DATETIME      NOT NULL,
        TotalMarks     INT           NOT NULL,
        CGPA           DECIMAL(4,2)  NOT NULL,
        Mobile         VARCHAR(10)   NOT NULL,
        Address        VARCHAR(250)  NULL,
        Email          VARCHAR(50)   NOT NULL,
        Course         VARCHAR(10)   NOT NULL,
        GraduationYear VARCHAR(4)    NOT NULL
    );
END
GO

-- Sample data (optional)
INSERT INTO Students (Name, DOB, TotalMarks, CGPA, Mobile, Address, Email, Course, GraduationYear)
VALUES
    ('Siva',  '2000-12-11 11:45:00', 452, 40.52, '9876543210', '12 Main St, Chennai', 'siva@gmail.com',  'B.E',     '2022'),
    ('Rama',  '2001-06-15 00:00:00', 500, 68.70, '8765432109', '5 Park Ave, Madurai', 'rama@gmail.com',  'B.Tech',  '2023'),
    ('Priya', '1999-03-22 00:00:00', 480, 75.00, '7654321098', '8 Cross Rd, Coimbatore', 'priya@gmail.com', 'M.E', '2024');
GO
