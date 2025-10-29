import mongoose from "mongoose";

const PRDSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  title: { type: String, required: true },
  problemStatement: String,
  targetAudience: String,
  goals: String,
  features: String,
  constraints: String,
  objectives: [String],
  userStories: [String],
  requirements: [String],
  acceptanceCriteria: [String],
  metrics: [String],
  risks: [String],
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("PRD", PRDSchema);
