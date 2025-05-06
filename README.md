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
- **Validation:** express-validator
- **Mailer:** Nodemailer

---

## 📦 Installation Required Packages 

```bash

npm init -y
npm i express
npm i drizzle-orm @neondatabase/serverless dotenv
npm i -D drizzle-kit 
npm i express-validator
npm i nodemailer
npm i jsonwebtoken
npm i cookie-parser
npm i -D nodemon

```
## .env File (add DB URL)
DATABASE_URL=https://<your_neon_project_connection_string>
## Applying changes to the database
npx drizzle-kit push
## Generate migrations:
npx drizzle-kit generate
## Apply migrations:
npx drizzle-kit migrate
