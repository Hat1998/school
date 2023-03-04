import {TypeOf , z} from 'zod'


export const addUser = z.object({
    body:z.object({
        username:z.string({
            required_error:"username is required",
            invalid_type_error:"usernameis invalid"
        }).max(20, "username should be less than 20 characters")
          .min(2,"username should be more than 2 characters"),
         password:z.string({
            required_error:"password is required",
            invalid_type_error:"password is invalid"
        }),
        email:z.string({
            required_error:"email is required",
            invalid_type_error:"email is invalid"
        }),
        role:z.string({
            required_error:"role is required",
            invalid_type_error:"role is invalid"
        }),
        age:z.number({
            required_error:"age is required",
            invalid_type_error:"age is invalid"
        }),
        joining_year:z.number({
            required_error:"Joining year is required",
            invalid_type_error:"joining year is invalid"
        }),
})
})

 
export type addUserSchema = TypeOf <typeof addUser>["body"]
 
