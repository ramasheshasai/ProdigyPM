import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/auth.js";
import prdRoutes from "./routes/prdRoutes.js";

// import userRoutes from "./userRoutes.js"; // ✅ if you have this

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// ✅ FIXED: Use IPv4 and fallback to 127.0.0.1
const mongoURI = process.env.MONGO_URI.replace("localhost", "127.0.0.1");

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    family: 4, // 👈 forces IPv4 connection
  })
  .then(() => console.log("✅ MongoDB connected successfully"))
  .catch((err) => console.error("❌ MongoDB Connection Failed:", err));

app.use("/api/auth", authRoutes);
app.use("/api/prds", prdRoutes);
// app.use("/api/users", userRoutes); // optional

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
