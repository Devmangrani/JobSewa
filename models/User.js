import { required } from 'joi';
import { List } from 'lucide-react';
import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  image: {
    type: String,
    default:
      "https://res.cloudinary.com/dw2dqblhs/image/upload/v1684038562/Janseva/employerProfile_gcbm6i.png",
  },
  jobCategories: { type: [String]}
});

mongoose.models = {};
const User = mongoose.model('User', UserSchema);

export default User;