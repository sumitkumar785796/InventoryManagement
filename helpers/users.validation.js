const { body } = require("express-validator");
const { eq } = require("drizzle-orm");
const { users } = require("../models/schema");
const { neon } = require("@neondatabase/serverless");
const { drizzle } = require("drizzle-orm/neon-http");
const { dburl } = require("../utils");
const sql = neon(dburl);
const db = drizzle(sql);
// Define your validation middleware functions
exports.RegistrationRules = [
    body("email")
        .notEmpty().withMessage("Email is required")
        .custom(async (value) => {
            const result = await db
                .select()
                .from(users)
                .where(eq(users.email, value))
                .limit(1);

            if (result.length > 0) {
                throw new Error("Email already exists...");
            }
        }),
];
/*
exports.UpdationRules = [
    param('id')
        .notEmpty().withMessage('Id is required')
        .isMongoId().withMessage('Invalid ID format.')
        .custom(async value => {
            const existingUser = await simpleForm.findById(value)
            if (!existingUser) {
                throw new Error('Data not found...')
            }
        }),
    body('full_name')
        .notEmpty()
        .withMessage('full name is required')
        .isLength({ min: 5 })
        .withMessage('full name must be at least 5 characters'),
    body('email')
        .notEmpty().withMessage('Email is required'),
    body('mobile')
        .notEmpty().withMessage('Mobile is required')
        .isMobilePhone()
        .withMessage('Invalid mobile phone number')
        .isLength({ min: 10 })
        .withMessage('Mobile number must be at least 10 digits'),
];
exports.DeletionRules = [
    param('id')
        .notEmpty().withMessage('Id is required')
        .isMongoId().withMessage('Invalid ID format.')
        .custom(async value => {
            const existingUser = await simpleForm.findById(value)
            if (!existingUser) {
                throw new Error('Data not found...')
            }
        })
];*/
