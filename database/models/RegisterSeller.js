import mongoose from "mongoose";
const Schema = mongoose.Schema;

const RegisterSellerSchema = new Schema(
  {
    fName: String,
    lName: String,
    college:String,
    email: { type: String, unique: true },
    phone: String,
    password: String,
  },
  { timestamps: true }
);

mongoose.models = {};
export default mongoose.model("RegisterSeller", RegisterSellerSchema);