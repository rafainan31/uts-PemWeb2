import express from "express";

import {
  getEvents,
  createEvent,
  getEventById,
  deleteEvent,
  updateEvent,
} from "../controllers/evenController.js"; 

const router = express.Router();

router.get("/", getEvents);
router.post("/", createEvent);
router.get("/:id", getEventById);
router.put("/:id", updateEvent);
router.delete("/:id", deleteEvent);

export default router;