import jwt from 'jsonwebtoken'
import User from '../models/userModel.js'

const protect = async(req, res)=>{
    try{

        
        if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
            try{//TODO checks for req.headers.authorization
                let token = req.headers.authorization.split(' ')[1]
                
                const decoded = jwt.verify(token , 'secret123')  
                        
                const user = await User.findById(decoded.id).select('-password')
                console.log(user)
                //! throws an error if token is not verified
                //* it token is verified we call the next function and moves to the corresponding controller function 
               
                console.log('success')    
                return {message: 'User is valid', status: 200}     
               }catch(error){                  
                    //* catches the error if token is not verified
                return {message: 'Token expired', status: 404} 
                    
                    
               }
        }else{
            //! throws error if req.headers.authorization is not set
            throw new Error('Not authorized , no token')
        }   
        }catch(error){      
        //* catches the error of not having req.headers.authorization set
        
        return {message: error.message , status: 401 } 

    }   
}
export default protect