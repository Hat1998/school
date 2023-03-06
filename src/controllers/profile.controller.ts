import { prisma } from "../config/db";
import { Request, Response } from "express";

 
export const getProfiles = async (req: Request, res: Response) => {
  try {
    let profile = await prisma.profile.findMany();

    res.json({ "profile": profile });
  } catch (err) {
    console.log(err);
  }
};
 
export const addProfile = async (req: Request, res: Response) => {
  
  try {
    await prisma.profile.create({
      data: req.body
    });
    res.json({ message: "profile created" });
  } catch (error) {
    res.json({ message: error });
  }
};
 
export const getProfileById = async (req: Request, res: Response) => {
  try {
    let profile = await prisma.profile.findMany({
      where: {
        id: req.params.id,
      },
    });
    res.json({ "profile": profile });
  } catch (error) {
    res.json({ message: error });
  }
};

 