import { Request, Response } from "express";

let events: any[] = [];

export const getEvents = (req: Request, res: Response) => {
  res.json(events);
};

export const createEvent = (req: Request, res: Response) => {
  const { eventName, speaker, category, date, time } = req.body;

  if (!eventName || !speaker || !category || !date || !time) {
    return res.status(400).json({
      message: "Semua data event wajib diisi",
    });
  }

  const newEvent = {
    id: Date.now(),
    title: eventName,
    eventName,
    speaker,
    category,
    date,
    time,
    location: "-",
    image: "",
  };

  events.push(newEvent);

  res.status(201).json({
    message: "Event berhasil dibuat",
    event: newEvent,
  });
};

export const deleteEvent = (req: Request, res: Response) => {
  const id = Number(req.params.id);

  events = events.filter((event) => event.id !== id);

  res.json({
    message: "Event berhasil dihapus",
  });
};