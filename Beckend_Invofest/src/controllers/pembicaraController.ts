import { Request, Response } from "express";
import { prisma } from "../lib/db.js";

// GET ALL
export const getPembicara = async (
  req: Request,
  res: Response
) => {
  try {
    const pembicara = await prisma.speaker.findMany();

    res.json(pembicara);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Gagal mengambil data pembicara",
    });
  }
};

// CREATE
export const createPembicara = async (
  req: Request,
  res: Response
) => {
  try {
    const { name, role, image } = req.body;

    if (!name || !role) {
      return res.status(400).json({
        message: "Name dan role harus diisi",
      });
    }

    const pembicara = await prisma.speaker.create({
      data: {
        name,
        role,
        image,
      },
    });

    res.status(201).json({
      message: "Pembicara berhasil dibuat",
      pembicara,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Gagal membuat pembicara",
    });
  }
};

// GET BY ID
export const showPembicara = async (
  req: Request,
  res: Response
) => {
  try {
    const id = Number(req.params.id);

    const pembicara = await prisma.speaker.findUnique({
      where: {
        id,
      },
    });

    if (!pembicara) {
      return res.status(404).json({
        message: "Pembicara tidak ditemukan",
      });
    }

    res.json(pembicara);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Gagal mengambil detail pembicara",
    });
  }
};

// UPDATE
export const updatePembicara = async (
  req: Request,
  res: Response
) => {
  try {
    const id = Number(req.params.id);

    const { name, role, image } = req.body;

    const pembicara = await prisma.speaker.update({
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
      pembicara,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Gagal update pembicara",
    });
  }
};

// DELETE
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
      message: "Gagal delete pembicara",
    });
  }
};