import { Request, Response } from "express";
import { prisma } from "../lib/db.js";

// GET ALL EVENTS
export const getEvents = async (
  req: Request,
  res: Response
) => {
  try {
    const events = await prisma.event.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    res.json(events);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Gagal mengambil event",
    });
  }
};

// CREATE EVENT
export const createEvent = async (
  req: Request,
  res: Response
) => {
  try {
    const {
      name,
      categoryId,
      location,
      dateEvent,
      description,
    } = req.body;

    if (!name || !categoryId || !location || !dateEvent || !description) {
      return res.status(400).json({
        message: "Semua data event wajib diisi",
      });
    }

    const newEvent = await prisma.event.create({
      data: {
        name,
        categoryId: Number(categoryId),
        location,
        dateEvent: new Date(dateEvent),
        description,
      },
    });

    res.status(201).json({
      message: "Event berhasil dibuat",
      data: newEvent,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Gagal membuat event",
    });
  }
};

// GET EVENT BY ID
export const getEventById = async (
  req: Request,
  res: Response
) => {
  try {
    const id = Number(req.params.id);

    const event = await prisma.event.findUnique({
      where: {
        id,
      },
    });

    if (!event) {
      return res.status(404).json({
        message: "Event tidak ditemukan",
      });
    }

    res.json(event);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Gagal mengambil event",
    });
  }
};

// UPDATE EVENT
export const updateEvent = async (
  req: Request,
  res: Response
) => {
  try {
    const id = Number(req.params.id);

    const {
      name,
      categoryId,
      location,
      dateEvent,
      description,
    } = req.body;

    if (!name || !categoryId || !location || !dateEvent || !description) {
      return res.status(400).json({
        message: "Semua data event wajib diisi",
      });
    }

    const updatedEvent = await prisma.event.update({
      where: {
        id,
      },
      data: {
        name,
        categoryId: Number(categoryId),
        location,
        dateEvent: new Date(dateEvent),
        description,
      },
    });

    res.json({
      message: "Event berhasil diupdate",
      data: updatedEvent,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Gagal update event",
    });
  }
};

// DELETE EVENT
export const deleteEvent = async (
  req: Request,
  res: Response
) => {
  try {
    const id = Number(req.params.id);

    await prisma.event.delete({
      where: {
        id,
      },
    });

    res.json({
      message: "Event berhasil dihapus",
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Gagal hapus event",
    });
  }
};