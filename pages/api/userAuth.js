import User from './models/userModel'
import connectDB from './db';
import generateToken from './utils/generateToken';

export default async (req, res)=>{

    //authenticate user
    try{
        //connect to database
        connectDB()

        const {email,password,userType} = req.body;

        //check is user exists from database
        const user = await User.findOne({email:email})


        if(user && (user.password === password) && (user.userType=== userType) ){


            res.status(200).json({  

                _id: user._id,
                email: user.email,
                userType: user.userType,
                token: generateToken(user._id)
            })

        }else{
            res.json({
                error: 'user authentication failed'
            })
        }

    }catch(error){
        res.status(401).json({
            error: 'user authentication failed'
        })
    }



    //generate token
}

