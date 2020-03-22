const mongooose = require("mongoose");

function validator(el) {
  return el.trim() === "" ? false : true;
}
const postSchema = new mongooose.Schema({
  title: {
    type: String,
    required: [true, "Post must havea tittle"],
    validate: [validator, "Can not be blank"]
  },
  content: {
    type: String,
    required: [true, "Post can not be blank"],
    validate: [validator, "Can not be blank"]
  },
  _userid: {
    type: mongooose.Schema.ObjectId,
    ref: "User"
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  _comments: [
    {
      type: mongooose.Schema.ObjectId,
      ref: "Comment"
    }
  ]
});
const Post = mongooose.model("Post", postSchema);

module.exports = Post;
