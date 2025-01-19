const express = require("express")
const Route = express.Router()

Route.post("/signup", AuthController.signup)
Route.post("/login", AuthController.login)
Route.post("/forgetPassword", AuthController.forgetPassword)
Route.post("/changePassword", AuthController.changePassword)
Route.post("/sendopt", AuthController.sendOPT)


module.exports = Route