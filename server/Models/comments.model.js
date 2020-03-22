const mongooose = require("mongoose");

const commentSchema = new mongooose.Schema({
  content: {
    type: String,
    required: [true, "Comments need a content"],
    validate: {
      validator: function(val) {
        return val.trim() === "" ? false : true;
      },
      messssage: "Blank not allowed"
    }
  },
  _userid: {
    type: mongooose.Schema.ObjectId,
    ref: "User"
  },
  _postid: {
    type: mongooose.Schema.ObjectId,
    ref: "Post"
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Comment = mongooose.model("Comment", commentSchema);

module.exports = Comment;
