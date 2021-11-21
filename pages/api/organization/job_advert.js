import User from "../models/jobAdvertsModel";
import Company from "../models/companyModel";
import connectDB from "../db";

export default async (req, res)=>{


    connectDB()

    try{
        
        
        if(req.method== 'POST'){
            
                const { job_title, closing_date, job_location, job_description, job_industry, job_type, experience_level, job_location_type }= req.body;
                
                //create document using Mongoose Model
                const user = await User.create({firstName, lastName, email, password, userType});

                console.log(job_title, closing_date)

                // if(user){

                //     const user_id = user._id
                    
                //     const company = await Company.create({companyName, noOfEmp, role_in_hiring_process, description, street, city, state, country, zipCode, user_id})

                //     if(company){console.log(company._id)}

                // }else{
                // throw new Error('Invalid user data');
                // }
        }else{
            res.status(500).json({"error": "nothing was created"})
        }



    }catch(error){

        res.status(401).json({
             error: error.message
        });
    }

    
  
}
   