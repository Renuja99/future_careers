import jwt from 'jsonwebtoken'
import User from '../models/userModel'
import protect from '../middleware/authMiddleware'

export default async (req, res)=>{


    

    const response = await protect( req, res )

    res.status(response.status).json(JSON.stringify(response))
    

    


    
}

