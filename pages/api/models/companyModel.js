import mongoose from 'mongoose'

const companySchema = mongoose.Schema(
    {
        companyName:{
            type: String,
            required: true,
        },

        noOfEmp:{
            type:Number,
            required: true,
        },

        role_in_hiring_process:{
            type: String,
            required: true,
        },

        profileVerified:{
            type: Boolean,
            default: false
        },

        user_id:{
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User'
        },

        description:{
            type: String,
            required: false
        },

        street:{
            type: String,
            required: false
        },

        city:{
            type: String,
            required: false
        },

        state:{
            type:String,
            required: false
        },

        country:{
            type: String,
            required: true
        },

        zipCode:{
            type: String,
            required: false
        }


    },{
        timestamps: true
    }
)

export default mongoose.models.Company || mongoose.model('Company', companySchema)