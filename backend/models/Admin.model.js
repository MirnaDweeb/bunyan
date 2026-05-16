const { required } = require("joi");
const mongoose = require("mongoose");
const adminschema = new mongoose.Schema({
  UserName: {
    type: String,
    required: [true, "username is required"],
  },
  email: { type: String, required: [true, "username is required"] },
  password: {
    type: String,
    required: [true, "username is required"],
    minlength:[6,"password must be 6 char"],
    select:false,
  },
},
{timestamps:true}
);
