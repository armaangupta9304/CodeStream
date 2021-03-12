const User = require("../../models/User");
const Code = require("../../models/Code");
const path = require("path");
const getUser = require("../../Helpers/getUser");

exports.getAll = async (req, res, next) => {
  const user = await User.find({ googleId: req.user.id });
  console.log(user);
  return res.json({
    codes: user[0].codesWritten,
  });
};

exports.getSpecific = async (req, res, next) => {
  const { id } = req.params;
  try {
    const code = await Code.findById(id);
    return res.json({ code });
  } catch (error) {
    console.log(
      error.message
        ? error.message
        : `Something Wen't Wrong! Check ${__dirname + "/" + __filename}`
    );
    return res.json({
      message: "Something Wen't Wrong!",
    });
  }
};

exports.createPost = async (req, res, next) => {
  const { title, code, description } = req.body;
  const newPost = new Code({
    title,
    code,
    description,
    author: getUser(),
  });
  try {
    const doc = await newPost.save();
    return res.json({ doc });
  } catch (error) {
    return res.status(300).json({
      message: "Something Wrong Happened",
    });
  }
};
