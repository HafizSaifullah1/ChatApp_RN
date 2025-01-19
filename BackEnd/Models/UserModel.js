const mongoose = require("mongoose")

const userSchema = new mongoose.Schema(

    {
        name: {
          type: String,
          required: true, // Name is mandatory
          trim: true, // Removes leading/trailing spaces
        },
        email: {
          type: String,
          required: true,
          unique: true, // Ensures no duplicate emails
          trim: true,
          lowercase: true, // Converts email to lowercase
        },
        password: {
          type: String,
          required: true, // Password is mandatory
          minlength: 6, // Minimum length of password
        },
        role: {
          type: String,
          enum: ['user', 'admin'], // User roles
          default: 'user', // Default role is 'user'
        },
        isActive: {
          type: Boolean,
          default: true, // To track if the user account is active
        },
        createdAt: {
          type: Date,
          default: Date.now, // Automatically sets the registration date
        },
        lastLogin: {
          type: Date, // Tracks the last login time
        },
      },
      {
        timestamps: true, // Automatically adds createdAt and updatedAt fields
      }
    );

// Create the User model
const UserModel = mongoose.model("user", userSchema)
module.exports = UserModel