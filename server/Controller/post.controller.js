const Post = require("../Models/post.model");
const Comment = require("../Models/comments.model");
const { catchAsync } = require("../services/catchAsync");
const AppError = require("../services/appError");

const sendResponse = (data, status, res) => {
  res.status(status).send({
    data: data
  });
};
exports.getall = catchAsync(async (req, res, next) => {
  const post = await Post.find().populate({
    path: "_userid",
    select: "name -_id"
  });
  if (!post) return next(new AppError("Error", 404));
  sendResponse(post, 200, res);
});

exports.addpost = catchAsync(async (req, res, next) => {
  const { title, content } = req.body;
  const _userid = req.user._id;
  const newpost = await Post.create({ title, content, _userid });
  if (!newpost) return next(new AppError("Error posting", 500));
  sendResponse(newpost, 201, res);
});

exports.getpost = catchAsync(async (req, res, next) => {
  const id = req.params.id;
  const post = await Post.findById(id)
    .populate({
      path: "_userid",
      select: "name -_id"
    })
    .populate({ path: "_comments", select: "content -_id" });
  sendResponse(post, 200, res);
});

exports.addComment = catchAsync(async (req, res, next) => {
  const _postid = req.params.id;
  const _userid = req.user._id;
  const content = req.body.content;
  const newcomment = await Comment.create({ _postid, _userid, content });
  if (!newcomment) return next(new AppError("Error adding comment", 401));
  const post = await Post.findByIdAndUpdate(_postid, {
    $push: { _comments: newcomment._id }
  })
    .populate({
      path: "_userid",
      select: "name -_id"
    })
    .populate({ path: "_comments", select: "content -_id" });
  sendResponse(post, 201, res);
});
