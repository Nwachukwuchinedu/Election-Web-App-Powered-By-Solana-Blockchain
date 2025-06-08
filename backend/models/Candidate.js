// backend/models/Candidate.js

import mongoose from "mongoose";

const CandidateSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    department: {
      type: String,
      required: true,
    },
    bio: {
      type: String,
    },
    image: {
      type: String, // Cloudinary URL
    },
    votes: {
      type: Number,
      default: 0,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Admin",
      required: true,
    },
  },
  { timestamps: true }
);

CandidateSchema.index({ department: 1 });

export default mongoose.model("Candidate", CandidateSchema);
