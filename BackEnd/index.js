require("dotenv").config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors")

const app = express();
app.use(express.json());
app.use(cors());


//ROUTES start
const authRoutes = require('./AuthController/authController'); 

// ROUTES END

app.get('/', (req, res) => {(
        res.send('Hello  Backend')
    )});  // GET request to the root URL




mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(3000, () => {
        console.log('conncted database Server started 3000');
    });

  })
  .catch((err) => {
    console.log("database error",err);
  });
