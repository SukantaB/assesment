const mongooose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");
const crypto = require("crypto");

const userSchema = new mongooose.Schema({
  name: {
    type: String,
    required: [true, "User must have a name"],
    trim: true,
    maxlength: [20, "Maximum length 20"]
  },
  email: {
    type: String,
    required: [true, "User must have a email"],
    trim: true,
    lowercase: true,
    unique: true,
    validate: [validator.isEmail, "Invalid email format"]
  },
  password: {
    type: String,
    required: [true, "User must have a password"],
    validate: {
      validator: function(val) {
        const reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/g;
        return reg.test(val);
      },
      message: "Invalid format"
    },
    select: false
  }
});

userSchema.pre("save", async function(next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});
userSchema.methods.correctPassword = async function(
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};
const User = mongooose.model("User", userSchema);

module.exports = User;
