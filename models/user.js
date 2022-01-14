// const mongoose = require("mongoose");
// const crypto = require("crypto");

// const { v1: uuidv1 } = require("uuid");

// const userSchema = new mongoose.Schema({
//   fullname: {
//     type: String,
//     require: true,
//     maxlenght: 32,
//   },
//   phonenumber: {
//     type: String,
//     required: true,
//     unique: 8,
//   },
//   hashed_password: {
//     type: String,
//     required: true,
//   },
//   address: {
//     type: String,
//     require: true,
//   },
//   Vehiclename: {
//     type: String,
//     require: true,
//   },
//   VehicleType: {
//     type: String,
//     require: true,
//   },
//   VehicleNumber: {
//     type: String,
//     require: true,
//   },
//   status: {
//     type: String,
//     require: true,
//   },
// });

// userSchema
//   .virtual("password")
//   .set(function (password) {
//     this._password = password;
//     this.salt = uuidv1();
//     this.hashed_password = this.encryptPassword(password);
//   })
//   .get(function () {
//     return this._password;
//   });

// userSchema.methods = {
//   encryptPassword: function (password) {
//     if (!password) return "";
//     try {
//       return crypto
//         .createHmac("sha1", this.salt)
//         .update(password)
//         .digest("hex");
//     } catch (err) {
//       return "";
//     }
//   },
// };

// module.exports = mongoose.model("User", userSchema);

// // now we can move on and start to working on the routes and controllers to sing up a new user.
