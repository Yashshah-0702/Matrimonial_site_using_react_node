const express = require("express");
const router = express.Router();
const {
  signUp,
  login,
  getProfile,
  getProfiles,
  updateProfile,
  deleteProfile,
  forgotPassword,
  resetPassword,
  changePassword,
} = require("../controller/user.controller");
const {
  verifyResetToken,
  isAuthenticated,
} = require("../middleware/authentication.middelware");
const middelware = require("../middleware/validation.middleware")
const {userValidator} = require("../validations")

module.exports = () => {
  router.get("/getprofiles", isAuthenticated, getProfiles);
  router.post("/signUp/:user" , middelware(userValidator.signUpSchema), signUp);
  router.post("/login", login);
  router.post("/getprofile", isAuthenticated, getProfile);
  router.patch("/updateProfile", isAuthenticated, updateProfile);
  router.delete("/deleteProfile", isAuthenticated, deleteProfile);
  router.post("/forgotPassword", forgotPassword);
  router.post("/resetPassword", verifyResetToken, resetPassword);
  router.post("/changePassword", isAuthenticated, changePassword);

  return router;
};
