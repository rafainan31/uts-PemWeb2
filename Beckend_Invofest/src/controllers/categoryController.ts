import { Request, Response } from "express";
import { prisma } from "../lib/db.js";

// GET ALL
export const getCategories = async (
  req: Request,
  res: Response
) => {
  try {
    const categories =
      await prisma.category.findMany();

    res.json(categories);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Gagal mengambil data",
    });
  }
};

// CREATE
export const createCategory = async (
  req: Request,
  res: Response
) => {
  try {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({
        message: "Nama category harus diisi",
      });
    }

    const category =
      await prisma.category.create({
        data: {
          name,
        },
      });

    res.status(201).json({
      message: "Category berhasil dibuat",
      category,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Gagal membuat category",
    });
  }
};

// GET BY ID
export const showCategories = async (
  req: Request,
  res: Response
) => {
  try {
    const id = Number(req.params.id);

    const category =
      await prisma.category.findUnique({
        where: {
          id,
        },
      });

    if (!category) {
      return res.status(404).json({
        message: "Category tidak ditemukan",
      });
    }

    res.json(category);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Gagal mengambil category",
    });
  }
};

// UPDATE
export const updateCategories = async (
  req: Request,
  res: Response
) => {
  try {
    const id = Number(req.params.id);

    const { name } = req.body;

    const category =
      await prisma.category.update({
        where: {
          id,
        },
        data: {
          name,
        },
      });

    res.json({
      message: "Category berhasil diupdate",
      category,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Gagal update category",
    });
  }
};

// DELETE
export const deleteCategories = async (
  req: Request,
  res: Response
) => {
  try {
    const id = Number(req.params.id);

    await prisma.category.delete({
      where: {
        id,
      },
    });

    res.json({
      message: "Category berhasil dihapus",
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Gagal delete category",
    });
  }
};