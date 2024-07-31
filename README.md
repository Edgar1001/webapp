# User Registration Web Application

This is a web application for user registration. The frontend is served by a Node.js HTTP server, and the backend is served by a Spring Boot application using a non-persistent H2 database.

## Features

- User registration form
- Backend validation and storage of user data
- Non-persistent H2 database for development and testing

## Technologies Used

- Node.js
- Spring Boot
- H2 Database
- HTML/CSS/JavaScript

## Project Structure

my-webapp-project/
├── backend/
│   ├── build.gradle
│   └── src/
│       ├── main/
│       │   ├── java/
│       │   │   └── com/
│       │   │       └── example/
│       │   │           └── webapp/
│       │   │               ├── WebAppApplication.java
│       │   │               ├── controller/
│       │   │               │   └── UserController.java
│       │   │               ├── model/
│       │   │               │   └── User.java
│       │   │               └── repository/
│       │   │                   └── UserRepository.java
│       │   └── resources/
│       │       └── application.properties
│       └── test/
│           └── java/
│               └── com/
│                   └── example/
│                       └── webapp/
│                           └── WebAppApplicationTests.java
└── frontend/
    ├── public/
    │   ├── index.html
    │   ├── script.js
    │   └── style.css
