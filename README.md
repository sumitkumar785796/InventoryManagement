# 🔐 Secure Inventory Item Management API

This project is a **Secure RESTful API** built with **Node.js**, **Express.js**, and **Drizzle ORM**, allowing users to manage simple inventory items linked to their accounts. It uses **OTP-based email authentication** to ensure secure access.

> ✅ This API demonstrates best practices in REST API design, authentication, database interaction, code structure, and deployment.

---

## 🧰 Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **ORM:** Drizzle ORM
- **Database:** PostgreSQL (via NeonDB)
- **Auth:** OTP via Email + JWT + Cookies
- **Mailer:** Nodemailer

---

## 📦 Installation Required Packages 

```bash

npm init -y
npm i express
npm i drizzle-orm @neondatabase/serverless dotenv
npm i -D drizzle-kit 
npm i nodemailer
npm i jsonwebtoken
npm i cookie-parser
npm i -D nodemon
npm i cors
```
## .env File (add DB URL)
```bash
DATABASE_URL=https://<your_neon_project_connection_string>
```
## Applying changes to the database
```bash
npx drizzle-kit push
```
## Generate migrations:
```bash
npx drizzle-kit generate
```
## Apply migrations:
```bash
npx drizzle-kit migrate
```
## ✅ How to Test Your API in Postman
## 1.Manage User Authentication
### 📤 Register User/Login User (Send OTP)

**Method**: `POST`  
**URL**: `https://sumitinventorymanage.onrender.com/api/users`  
**Description**: Sends an OTP to the user's email for login/registration.


#### 🔸 Request Body (JSON)
```json
{
  "email": "user@example.com"
}
```

### 📤 Verify OTP

**Method**: `POST`  
**URL**: `https://sumitinventorymanage.onrender.com/api/users/verify`  
**Description**:Verifies the OTP, then automatically generates a token and logs the user in.


#### 🔸 Request Body (JSON)
```json
{
  "email": "user@example.com",
  "otp":"123456"
}
```
### 📤 Access Profile

**Method**: `GET`  
**URL**: `https://sumitinventorymanage.onrender.com/api/users/accessprofile`  
**Description**:Retrieves the authenticated user's profile details using a valid JWT token stored in cookies.


#### 🔸Output
```json

{
    "message": "Your Profile",
    "data": {
        "userId": 1,
        "name": "User",
        "email": "user@example.com",
        "iat": 1746550146,
        "exp": 1746636546
    }
}
```
### 📤 Update Profile

**Method**: `PUT`  
**URL**: `https://sumitinventorymanage.onrender.com/api/users/updateprofile`  
**Description**:Allows the authenticated user to update their profile. The user's session is identified using the JWT token stored in cookies.

#### 🔸 Request Body (JSON)
```json
{
  "name": "Sumit Kumar"
}
```
#### 🔸Output
```json
{
    "message": "Name updated successfully"
}
```
### 📤 LogOut User

**Method**: `GET`  
**URL**: `https://sumitinventorymanage.onrender.com/api/users/logout`  
**Description**:Logs out the authenticated user by clearing the JWT token stored in cookies.

#### 🔸Output
```json
{
    "message": "Logged out successfully"
}
```
## 2.Manage Inventory Item (Authenticated Access Only)

### 📤 Add Inventory

**Method**: `POST`  
**URL**: `https://sumitinventorymanage.onrender.com/api/inventory`  
**Description**: Adds a new inventory item to the authenticated user's inventory. Requires authentication via JWT token stored in cookies.

#### 🔸 Request Body (JSON)
```json
{
    "name": "USB Flash Drive",
    "category": "Accessories",
    "quantity": "75",
    "price": "12",
    "description": "64GB USB 3.0 flash drive."
}
```
#### 🔸Output
```json
{
    "message": "Inventory item added",
}
```
### 📤 View Inventory

**Method**: `GET`  
**URL**: `https://sumitinventorymanage.onrender.com/api/inventory`  
**Description**: Retrieves a specific inventory item by its ID for the authenticated user. Requires authentication via JWT token stored in cookies.

#### 🔸Output
```json
{
    "message": "Inventory fetched",
    "data": [
        {
            "id": 1,
            "name": "USB Flash Drive",
            "category": "Accessories",
            "quantity": 75,
            "price": 12,
            "description": "64GB USB 3.0 flash drive.",
            "status": "Available",
            "userId": 1,
            "createdAt": "2025-05-06T16:57:59.518Z",
            "updatedAt": "2025-05-06T16:57:59.518Z"
        }
    ]
}
```
### 📤 Single Inventory

**Method**: `GET`  
**URL**: `https://sumitinventorymanage.onrender.com/api/inventory/1`  
**Description**:Retrieves the details of a single inventory item by its unique ID for the authenticated user. Requires authentication via JWT token stored in cookies.

#### 🔸Output
```json
{
    "message": "Inventory item fetched",
    "data": {
        "id": 1,
        "name": "USB Flash Drive",
        "category": "Accessories",
        "quantity": 75,
        "price": 12,
        "description": "64GB USB 3.0 flash drive.",
        "status": "Available",
        "userId": 1,
        "createdAt": "2025-05-06T16:57:59.518Z",
        "updatedAt": "2025-05-06T16:57:59.518Z"
    }
}
```
### 📤 Update Inventory

**Method**: `PUT`  
**URL**: `https://sumitinventorymanage.onrender.com/api/inventory/2`  
**Description**: Updates the details of a specific inventory item for the authenticated user. Requires authentication via JWT token stored in cookies.
#### 🔸 Request Body (JSON)
```json
{
    "name": "LED Monitor",
    "category": "Electronics",
    "quantity": "15",
    "price": "300",
    "description": "24-inch full HD LED monitor."
}
```

#### 🔸Output
```json
{
    "message": "Inventory updated",
    "data": {
        "id": 2,
        "name": "LED Monitor",
        "category": "Electronics",
        "quantity": 15,
        "price": 300,
        "description": "24-inch full HD LED monitor.",
        "status": "Available",
        "userId": 1,
        "createdAt": "2025-05-06T17:24:03.512Z",
        "updatedAt": "2025-05-06T17:24:03.512Z"
    }
}
```
### 📤 DELETE Inventory

**Method**: `DELETE`  
**URL**: `https://sumitinventorymanage.onrender.com/api/inventory/2`  
**Description**: Deletes a specific inventory item for the authenticated user. Requires authentication via JWT token stored in cookies.

#### 🔸Output
```json
{ 
    "message": "Inventory deleted",
    "data": {
        "id": 2,
        "name": "LED Monitor",
        "category": "Electronics",
        "quantity": 15,
        "price": 300,
        "description": "24-inch full HD LED monitor.",
        "status": "Available",
        "userId": 1,
        "createdAt": "2025-05-06T17:24:03.512Z",
        "updatedAt": "2025-05-06T17:24:03.512Z"
    }
}
```