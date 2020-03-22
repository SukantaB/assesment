const { promisify } = require("util");
const jwt = require("jsonwebtoken");
const User = require("../Models/user.model");
const { catchAsync } = require("../services/catchAsync");
const AppError = require("../services/appError");

const sendToken = (user, status, res) => {
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_TIME
  });
  user.password = undefined;
  res.status(status).json({
    status: "sucess",
    token,
    data: {
      user: user
    }
  });
};
exports.signup = catchAsync(async (req, res, next) => {
  const { name, email, password } = req.body;
  const newuser = await User.create({ name, email, password });
  if (!newuser) return next(new AppError("Invalid details", 400));
  sendToken(newuser, 201, res);
});

exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password)
    return next(new AppError("Invalid Email or Password", 400));
  const user = await User.findOne({ email }).select("+password");
  if (!user || !(await user.correctPassword(password, user.password)))
    return next(new AppError("Unauthorized", 401));
  sendToken(user, 200, res);
});

exports.protectedRoute = catchAsync(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }
  if (!token) return next(new AppError("Invalid Login", 401));
  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
  const freshuser = await User.findById(decoded.id);
  if (!freshuser)
    return next(new AppError("Invalid Token User does not exists", 401));
  req.user = freshuser;
  next();
});
