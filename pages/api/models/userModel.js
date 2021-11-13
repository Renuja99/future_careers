import mongoose from 'mongoose'

const userSchema = mongoose.Schema(
    {
        firstName:{
            type: String,
            required: true,
        },

        lastName:{
            type:String,
            required: true,
        },

        email:{
            type: String,
            required: true,
        },

        password:{
            type:String,
            required: true,
        },

        userType:{
            type: String,
            default: 'jobSeeker',
            enum:['admin', 'company', 'jobSeeker']
        },

        notifications:{
            type: Array
        }


    },{
        timestamps: true
    }
)

export default mongoose.models.User || mongoose.model('User', userSchema)