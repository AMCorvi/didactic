import mongoose from "mongoose";

let userSchema = mongoose.Schema({

    email:{
        type: String,
        required: true
    }
  , user: {
      type: String,
      required: true
  }

});

let User = mongoose.model("User", userSchema);
export default User;
