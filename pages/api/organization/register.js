import User from "../models/userModel";
import Company from "../models/companyModel";
import connectDB from "../db";
import generateToken from "../utils/generateToken";

export default async (req, res)=>{


    try{
        connectDB()
        
        if(req.method== 'POST'){


                //extracts data from request bosy
                const {firstName , lastName, email , password, userType, companyName , noOfEmp, role_in_hiring_process, description,
                
                street, city, state, country, zipCode   }= req.body;
                
                //create document using Mongoose Model
                const user = await User.create({firstName, lastName, email, password, userType});

                if(user){

                    const user_id = user._id
                    
                    const company = await Company.create({companyName, noOfEmp, role_in_hiring_process, description, street, city, state, country, zipCode, user_id})

                    if(company){

                        const admin  = await User.findOne({userType:'admin'})

                        if(admin){
                            admin.notifications.push(`${companyName} profile created by ${firstName}`)

                           const notificationCreated =  await admin.save()
                           console.log(notificationCreated)
                        }

                        res.status(200).json({  

                            _id: user._id,
                            email: user.email,
                            userType: user.userType,
                            token: generateToken(user._id)
                        })

                    }

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
   