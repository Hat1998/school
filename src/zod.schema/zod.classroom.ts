import {TypeOf , z} from 'zod'


export const addclassrom = z.object({
    body:z.object({
        name:z.string({
            required_error:"name is required",
            invalid_type_error:"name invalid"
        }).max(20, "name should be less than 20 characters")
          .min(2,"name should be more than 2 characters"),
        
         
})
})

 
export type classRoom = TypeOf <typeof addclassrom>["body"]
 
