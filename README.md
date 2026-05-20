# DocAppoint Server

A Node.js backend server for a doctor appointment booking system that manages patient appointments, doctor information, and user authentication.

## 🎯 Project Overview

DocAppoint Server is the backend API for the DocAppoint application, a comprehensive platform for booking doctor appointments online. The server handles user authentication, patient data management, doctor information retrieval, and appointment scheduling.

## 🚀 Features

- **User Authentication**: JWT-based authentication using remote JWKS
- **Patient Management**: Create, read, update, and delete patient appointment data
- **Doctor Management**: Retrieve doctor information and specific doctor details
- **User Profile Management**: Update user profile information with secure token verification
- **MongoDB Integration**: Persistent data storage with separate databases for server and client data
- **CORS Support**: Cross-Origin Resource Sharing enabled for frontend communication
- **Vercel Deployment**: Cloud-hosted API ready for production

## 🛠️ Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js v5.2.1
- **Database**: MongoDB v7.2.0
- **Authentication**: JWT with jose-cjs v6.2.3
- **Middleware**: 
  - CORS - for cross-origin requests
  - dotenv - for environment configuration
- **Deployment**: Vercel

## 🔧 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd DocAppoint-server
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory with the following variables:
```env
MONGODB_URI=<your-mongodb-connection-string>
PORT=<your-desired-port>
```

4. Start the server:
```bash
node index.js
```

The server will run on the specified PORT.

## 📡 API Endpoints

### Authentication
All endpoints marked with 🔒 require JWT token verification.

### Patient Appointments

- **GET** `/getPatientData`
  - Retrieve all patient appointments
  - Returns: Array of patient appointment records

- **POST** `/addPatientData`
  - Create a new patient appointment
  - Body: Patient appointment data
  - Returns: Insertion result with ID

- **PATCH** `/getPatientData/:id`
  - Update a patient appointment by ID
  - Body: Fields to update
  - Returns: Update result

- **DELETE** `/getPatientData/:id`
  - Delete a patient appointment by ID
  - Returns: Deletion result

### Doctor Information

- **GET** `/getDoctorData`
  - Retrieve all doctors information
  - Returns: Array of doctor records

- **GET** `/getDoctorData/:id` 🔒
  - Retrieve specific doctor information by ID
  - Requires: Valid JWT token
  - Returns: Doctor object

### User Profile

- **PATCH** `/updateUserData/:id` 🔒
  - Update user profile information
  - Requires: Valid JWT token
  - Body: User data to update
  - Returns: Update result

## 🔐 Authentication

The server uses JWT (JSON Web Tokens) for securing sensitive endpoints. Tokens are validated against a remote JWKS (JSON Web Key Set) from the DocAppoint client application.

### How to Use Protected Endpoints

Include the JWT token in the Authorization header:
```
Authorization: Bearer <your-jwt-token>
```

## 📊 Database Structure

### DocAppointServer Database
- `appointmentCollection`: Stores patient appointment data
- `doctorData`: Stores doctor information

### DocAppointClient Database
- `user`: Stores user profile information

## 🚀 Deployment

The project is configured for deployment on Vercel using the `vercel.json` configuration file. It supports all HTTP methods (GET, POST, PUT, DELETE, PATCH, OPTIONS).

### Deploy to Vercel

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

## 📝 Environment Variables

Create a `.env` file with the following variables:

| Variable | Description | Example |
|----------|-------------|---------|
| `MONGODB_URI` | MongoDB connection string | `mongodb+srv://user:pass@cluster.mongodb.net/` |
| `PORT` | Server port number | `3000` or `8000` |

## 🔄 CORS Configuration

CORS is enabled for all origins. For production, consider restricting this to specific domains.

## 📄 License

ISC

## 🤝 Contributing

This is a practice project for learning backend development. Feel free to fork and modify.

---

**Note**: This is the backend server. Ensure it's properly connected to the DocAppoint frontend client application for full functionality.
