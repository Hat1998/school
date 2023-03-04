import { Role } from "@prisma/client";
import { prisma } from "../config/db";
import { Request, Response } from "express";

//1
//app.get('/')
export const getAllUsers= async (req: Request, res: Response) => {
  try {
    let users = await prisma.user.findMany();

    res.json({ "users": users });
  } catch (err) {
    console.log(err);
  }
};
//2
//app.post('/')
export const createUser = async (req: Request, res: Response) => {
  try {
    await prisma.user.create({
      data: {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        role: req.body.role,
        age:req.body.age,
        joining_year:req.body.joining_year
      },
    });
    res.json({ message: "user created" });
  } catch (error) {
    res.json({ message: error });
  }
};
//3
//app.get('/:id')
export const getUserById = async (req: Request, res: Response) => {
  try {
    let user = await prisma.user.findMany({
      where: {
        id: req.params.id,
      },
    });
    res.json({ "user": user });
  } catch (error) {
    res.json({ message: error });
  }
};

//4
//app.get('/:email')
export const getUserByEmail = async (req: Request, res: Response) => {
  try {
    let user = await prisma.user.findMany({
      where: {
        email: req.params.email,
      },
    });
    res.json({ "user": user });
  } catch (error) {
    res.json({ message: error });
  }
};

//5
//app.get('/:age')
export const getUserByAge = async (req: Request, res: Response) => {
  try {
     let {age} = req.params 
     let a  = parseInt(age)

     let user = await prisma.user.findMany({
      select:{
        username:true,
        age:true
      },
      where: {
        age: {
          gt: a
        },
      },
    });
    res.json({ "user": user });
  } catch (error) {
    res.json({ message: error });
  }
};

//6
// router.get('/')
export const getUserRole = async (req: Request, res: Response) => {
     let role = req.params.role.toUpperCase() as Role;
    try {
    let user = await prisma.user.findMany({
      where: {
        role: role,
      },
    });
    res.json({ "user": `${user.length} ${role}S` });
  } catch (error) {
    res.json({ message: error });
  }
};

//7
//app.get('/:username/:password')
export const checkUsernameAndPassword = async (req:Request, res:Response)=>{
  try{
    let {password,username} = req.body 
    let user =  await prisma.user.findFirst({
      where:{
        username,
        password
      }
      
    })
    
    if(!user){
      res.json({message:"Incorrect username or password"}) 
    }else{
      res.json(user) 
    }
   
     


  }catch(error){
    res.json(error);
  }
}


//8
//app.post('/:id')
export const updateUserByPassword = async (req: Request, res: Response) => {
  try {
    let user = await prisma.user.update({
      where: {
        id: req.params.id,
       },
      data: {
        password: req.body.password,
      },
      
    });
    res.json({ message: "user password updated", user });
  } catch (error) {
    res.json({ message: error });
  }
};

//9
//app.get('/:id/:joiningYear')
export const chekJoingYear = async (req: Request, res: Response) => {
   try {
      let user = await prisma.user.findMany
      ({
      where: {
        id: req.params.id
        
      }
    });
     res.json({ message: ` this user Joined in ${user} `  });
  } catch (error) {
    res.json( error);
  }
};

//10
// app.get('/:joiningYear')
export const checkJoingYearAfter = async (req: Request, res: Response) => {
  try {
    let user = await prisma.user.findMany({
      where: {
         joining_year:{
          gte:parseInt(req.params.joiningYear)
         }
      }
    });
    res.json({ message: user });
  } catch (error) {
    res.json(error );
  }
};



// export const updateUser = async (req: Request, res: Response) => {
//   try {
//     await prisma.user.update({
//       where: {
//         id: req.params.id,
//       },
//       data: {
//         username: req.body.username,
//         email: req.body.email,
//         password: req.body.password,
//         role: req.body.role,
//       },
//     });
//     res.json({ message: "user updated" });
//   } catch (error) {
//     res.json({ message: error });
//   }
// };

export const deleteUser = async (req: Request, res: Response) => {
  try {
    await prisma.user.delete({
      where: { id: req.params.id },
    });
    res.json({ message: "User deleted" });
  } catch (error) {
    res.json({ message: error });
  }
};



 