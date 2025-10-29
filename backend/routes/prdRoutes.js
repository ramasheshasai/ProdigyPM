import express from "express";
import PRD from "../models/PRD.js";

const router = express.Router();

// ✅ Create PRD
router.post("/", async (req, res) => {
  try {
    const { userId, title, problemStatement, targetAudience, goals, features, constraints,
            objectives, userStories, requirements, acceptanceCriteria, metrics, risks } = req.body;

    if (!userId) {
      return res.status(400).json({ message: "Missing userId" });
    }

    const newPRD = new PRD({
      userId,
      title,
      problemStatement,
      targetAudience,
      goals,
      features,
      constraints,
      objectives,
      userStories,
      requirements,
      acceptanceCriteria,
      metrics,
      risks
    });

    await newPRD.save();
    res.status(201).json({ message: "PRD saved successfully!" });
  } catch (err) {
    console.error("Error saving PRD:", err);
    res.status(500).json({ message: "Server error while saving PRD", error: err.message });
  }
});

// ✅ Fetch PRDs for a user
router.get("/:userId", async (req, res) => {
  try {
    const prds = await PRD.find({ userId: req.params.userId });
    res.json(prds);
  } catch (err) {
    res.status(500).json({ message: "Error fetching PRDs" });
  }
});

export default router;
