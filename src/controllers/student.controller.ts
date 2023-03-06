 import { prisma } from "../config/db";
import { Request, Response } from "express";

 
export const getAllStudents= async (req: Request, res: Response) => {
  try {
    let students = await prisma.student.findMany();

    res.json({ "students": students });
  } catch (err) {
    console.log(err);
  }
};
 
export const addStudent = async (req: Request, res: Response) => {
  
  try {
    await prisma.student.create({
      data: req.body
    });
    res.json({ message: "student created" });
  } catch (error) {
    res.json({ message: error });
  }
};
 
export const getStudentById = async (req: Request, res: Response) => {
  try {
    let student = await prisma.student.findMany({
      where: {
        id: req.params.id,
      },
    });
    res.json({ "student": student });
  } catch (error) {
    res.json({ message: error });
  }
};

 