const mongoose = require('mongoose');

// Define the schema for a chat model
const ChatSchema = new mongoose.Schema(
  {
    participants: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Reference to the User model
        required: true,
      },
    ],
    messages: [
      {
        sender: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User', // Reference to the User model
          required: true,
        },
        text: {
          type: String,
          required: true,
          trim: true,
        },
        timestamp: {
          type: Date,
          default: Date.now, // Automatically sets the message time
        },
        isRead: {
          type: Boolean,
          default: false, // To track if the message has been read
        },
      },
    ],
    lastMessage: {
      text: String,
      timestamp: {
        type: Date,
        default: Date.now,
      },
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

// Create the Chat model
const ChatModel = mongoose.model('Chat', ChatSchema);

module.exports = ChatModel;
