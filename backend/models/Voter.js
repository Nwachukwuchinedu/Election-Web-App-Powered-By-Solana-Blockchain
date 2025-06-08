// backend/models/Voter.js

import mongoose from "mongoose";

const VoterSchema = new mongoose.Schema(
  {
    studentId: {
      type: String,
      required: true,
      unique: true,
      index: true, // For fast lookup
    },
    name: {
      type: String,
      required: true,
    },
    department: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    hasVoted: {
      type: Boolean,
      default: false,
    },
    walletAddress: {
      type: String,
      sparse: true, // Optional if using blockchain later
    },
  },
  { timestamps: true }
);

export default mongoose.model("Voter", VoterSchema);
