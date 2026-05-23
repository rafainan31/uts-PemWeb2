import { Request, Response } from "express";
import { prisma } from "../lib/db.js";

// GET ALL PEMBICARA / SPEAKER
export const getPembicara = async (
  req: Request,
  res: Response
) => {
  try {
    const speakers = await prisma.speaker.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    res.json(speakers);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Gagal mengambil data pembicara",
    });
  }
};

// CREATE PEMBICARA / SPEAKER
export const createPembicara = async (
  req: Request,
  res: Response
) => {
  try {
    const { name, role, image } = req.body;

    if (!name || !role || !image) {
      return res.status(400).json({
        message: "Nama, role, dan image harus diisi",
      });
    }

    const speaker = await prisma.speaker.create({
      data: {
        name,
        role,
        image,
      },
    });

    res.status(201).json({
      message: "Pembicara berhasil dibuat",
      data: speaker,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Gagal membuat pembicara",
    });
  }
};

// GET PEMBICARA BY ID
export const showPembicara = async (
  req: Request,
  res: Response
) => {
  try {
    const id = Number(req.params.id);

    const speaker = await prisma.speaker.findUnique({
      where: {
        id,
      },
    });

    if (!speaker) {
      return res.status(404).json({
        message: "Pembicara tidak ditemukan",
      });
    }

    res.json(speaker);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Gagal mengambil detail pembicara",
    });
  }
};

// UPDATE PEMBICARA / SPEAKER
export const updatePembicara = async (
  req: Request,
  res: Response
) => {
  try {
    const id = Number(req.params.id);

    const { name, role, image } = req.body;

    if (!name || !role || !image) {
      return res.status(400).json({
        message: "Nama, role, dan image harus diisi",
      });
    }

    const speaker = await prisma.speaker.update({
      where: {
        id,
      },
      data: {
        name,
        role,
        image,
      },
    });

    res.json({
      message: "Pembicara berhasil diupdate",
      data: speaker,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Gagal update pembicara",
    });
  }
};

// DELETE PEMBICARA / SPEAKER
export const deletePembicara = async (
  req: Request,
  res: Response
) => {
  try {
    const id = Number(req.params.id);

    await prisma.speaker.delete({
      where: {
        id,
      },
    });

    res.json({
      message: "Pembicara berhasil dihapus",
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Gagal hapus pembicara",
    });
  }
};