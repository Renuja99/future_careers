import JobAdvert from '../models/jobAdvertsModel'
import connectDB from '../db'
import adverts from './adverts'
import admin from './admin'

connectDB()

const importData=async(req, res)=>{
    try{
        await  JobAdvert.deleteMany()
        await  JobAdvert.insertMany(adverts)

        console.log('data imported successfully')
        res.status(200).send()
    }catch(error){
        console.log(error.message)
        res.status(500).send()
    }
}

const createAdmin = async(req, res)=>{
    try{
        await User.deleteMany()
        await User.insertMany(admin)

        console.log('data imported successfully')
        res.status(200).send()

    }catch(error){
        console.log(error.message)
        res.status(500).send()
    }
}


importData()