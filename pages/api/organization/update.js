import User from "../models/userModel";
import Company from "../models/companyModel";
import connectDB from "../db";
import generateToken from "../utils/generateToken";

export default async (req, res)=>{


    try{
        connectDB()
        
        if(req.method== 'POST'){


                //extracts data from request bosy
                const {companyId, firstName , lastName, email , password, companyName , noOfEmp, role_in_hiring_process, description,
                
                street, city, state, country, zipCode}= req.body;
                
                //create document using Mongoose Model
                const company = await Company.findOne({_id: companyId });

                if(company){

                    const user = await User.findOne({_id: company.user_id });

                    company.companyName = companyName
                    company.noOfEmp = noOfEmp
                    company.role_in_hiring_process = role_in_hiring_process
                    company.description = description
                    company.street = street
                    company.city = city
                    company.state = state
                    company.country = country
                    company.zipCode = zipCode
                    company.profileVerified = true

                    await company.save()

                    if(user){
                        user.firstName = firstName
                        user.lastName = lastName
                        user.email = email
                        user.password = password

                        await user.save()

                    }
                    
                    res.status(200).json({
                        message: "data updated successfully"
                    })
                    

                    

                }else{

                    throw new Error('Invalid user data');
                }

        }else{
            res.status(500).json({"error": "nothing was created"})
        }



    }catch(error){

        res.status(401).json({
             error: error.message
        });
    }

    
  
}