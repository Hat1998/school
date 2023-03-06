import {TypeOf , z} from 'zod'


export const addstudent = z.object({
    body:z.object({
        name:z.string({
            required_error:"name is required",
            invalid_type_error:"name invalid"
        }).max(20, "name should be less than 20 characters")
          .min(2,"name should be more than 2 characters"),
        age:z.number({
            required_error:"age is required",
            invalid_type_error:"age is invalid"
        }),
        major:z.string({
            required_error:"major is required",
            invalid_type_error:"major is invalid"
        })
         
})
})

 
export type student = TypeOf <typeof addstudent>["body"]
 
