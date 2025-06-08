// backend/models/Vote.js

import mongoose from "mongoose";

const VoteSchema = new mongoose.Schema(
  {
    voter: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Voter",
      required: true,
    },
    candidate: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Candidate",
      required: true,
    },
    poll: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Poll",
      required: true,
    },
    timestamp: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: false }
);

VoteSchema.index({ voter: 1, poll: 1 }, { unique: true }); // Prevent duplicate voting

export default mongoose.model("Vote", VoteSchema);
