 import { prisma } from "../config/db";
import { Request, Response } from "express";

 
export const getAllClassRooms= async (req: Request, res: Response) => {
  try {
    let classrooms = await prisma.classroom.findMany();

    res.json({ "classroom": classrooms });
  } catch (err) {
    console.log(err);
  }
};
 
export const addClassRoom = async (req: Request, res: Response) => {
  
  try {
    await prisma.classroom.create({
      data: req.body
    });
    res.json({ message: "classroom created" });
  } catch (error) {
    res.json({ message: error });
  }
};
 
export const getClassRoomById = async (req: Request, res: Response) => {
  try {
    let classroom = await prisma.classroom.findMany({
      where: {
        id: req.params.id,
      },
    });
    res.json({ "classroom": classroom });
  } catch (error) {
    res.json({ message: error });
  }
};

 