import express from "express";
import protect from "../middleware/authMiddleware.js";
import {
  createWorkspace,
  getMyWorkspaces,
} from "../controllers/workspaceController.js";

const router = express.Router();

router.post("/", protect, createWorkspace);
router.get("/", protect, getMyWorkspaces);

export default router;