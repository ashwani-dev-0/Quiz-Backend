import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

import express from "express";
import userRouter from "./routes/users.route.js";
import quizRouter from "./routes/quiz.route.js";
import authRouter from "./routes/auth.route.js";
import "./config/db.config.js";
import quesRouter from "./routes/question.route.js";
import feedbackRouter from "./routes/feedback.route.js";
import { authMiddleware } from "./middlewares/auth.moddleware.js";
import cors from "cors";

const server = express();

server.use(
  cors({
    origin: "https://quiz-frontend-six-indol.vercel.app",
  })
);

server.use(express.json());

// Public routes
server.use("/api", authRouter);

// Protected routes
server.use(authMiddleware);

server.use("/api", userRouter);
server.use("/api", quizRouter);
server.use("/api", quesRouter);
server.use("/api", feedbackRouter);

const PORT = process.env.PORT || 8181;

server.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});