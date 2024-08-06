import mongoose from "mongoose"
const userSchema = new mongoose.Schema({
     fullname: {
          type: String,
          required: true
     },
     email: {
          type: String,
          required: true,
          unique: true
     },
     phone: {
          type: Number,
          required: true
     },
     password: {
          type: String,
          required: true
     },
     role: {
          type: String,
          enum: ['Employee', 'Supervisor'],
          required: true
     },
     profile: {
          bio: { type: String },
          skills: [{ type: String }],
          resume: { type: String },
          resumeOrignalNumber: { type: String },
          company: { type: mongoose.Schema.Types.ObjectId, ref: 'Company' },
          profile: { type: String, default: "" },
     },
}, { timestamps: true });
export const User = mongoose.model('User', userSchema);