import express from "express";
import {
  createCategory,
  deleteCategories,
  getCategories,
  showCategories,
  updateCategories,
} from "../controllers/categoryController.js";

const router = express.Router();

// GET ALL
router.get("/", getCategories);

// GET BY ID
router.get("/:id", showCategories);

// CREATE
router.post("/", createCategory);

// UPDATE
router.put("/:id", updateCategories);

// DELETE
router.delete("/:id", deleteCategories);

export default router;