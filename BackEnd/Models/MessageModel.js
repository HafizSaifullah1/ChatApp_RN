const mongoose = require("mongoose")


const MessageSchema = new mongoose.SchemaType(


    {
        sender: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User', // Reference to the User model
          required: true, // Sender is mandatory
        },
        receiver: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User', // Reference to the User model
          required: true, // Receiver is mandatory
        },
        text: {
          type: String,
          required: true, // Message content is mandatory
          trim: true,
        },
        media: {
          type: String, // URL for any attached media (images, videos, etc.)
          default: null, // Optional field
        },
        isRead: {
          type: Boolean,
          default: false, // Tracks if the message has been read
        },
        deletedForSender: {
          type: Boolean,
          default: false, // Tracks if the sender deleted the message
        },
        deletedForReceiver: {
          type: Boolean,
          default: false, // Tracks if the receiver deleted the message
        },
      },
      {
        timestamps: true, // Automatically adds createdAt and updatedAt fields
      }
    );


const MessageModel = mongoose.model("message", MessageSchema)
moudel.exports = MessageModel