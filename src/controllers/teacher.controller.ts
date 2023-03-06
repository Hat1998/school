 import { prisma } from "../config/db";
import { Request, Response } from "express";

 
export const getAllTeachers= async (req: Request, res: Response) => {
  try {
    let teachers = await prisma.teacher.findMany();

    res.json({ "teachers": teachers });
  } catch (err) {
    console.log(err);
  }
};
 
export const addTeacher = async (req: Request, res: Response) => {
  
  try {
    await prisma.teacher.create({
      data: req.body
    });
    res.json({ message: "teacher created" });
  } catch (error) {
    res.json({ message: error });
  }
};
 
export const getTeacherById = async (req: Request, res: Response) => {
  try {
    let teacher = await prisma.teacher.findMany({
      where: {
        id: req.params.id,
      },
    });
    res.json({ "teacher": teacher });
  } catch (error) {
    res.json({ message: error });
  }
};

 