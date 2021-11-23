import connectDB from "../db"
import Company from "../models/companyModel"
import User from "../models/userModel"

export default async function(req, res){

    connectDB()

    

    const {id} = req.query

    
    const companyData = await Company.findOne({_id: id})
    const userData = await User.findOne({_id: companyData.user_id})

    console.log(userData)
    res.json({
        compData: companyData,
        userData: userData
    })
    

}