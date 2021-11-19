import mongoose from 'mongoose'

const jobAdvertSchema = mongoose.Schema({

    job_title:{
        type: String,
        required: true,
    },

    view_status:{
        type:Boolean,
        default: true
    },

    company_id:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Company'
    },

    closing_date:{
        type: Date,
        required: false,

    },
    
    job_location:{
        type: String,
        required: true
    },

    job_description:{
        type: String,
        required: true,
    },

    view_count:{
        type: Number,
        default: 0
    },

    job_industry:{
        type: Array,
        required: false
    },

    job_type:{
        type: String,
        default: 'Full-time',
        enum: ['Full-time','Part-time', 'Contract basis']
    },

    experience_level:{
        type: String,
        default: 'Entry Level',
        enum: ['Senior Level', 'Mid Level', 'Entry level']

    },

    job_location_type:{
        type:String,
        default: 'On-site',
        enum: ['Remote', 'On-site']
    }

},
{
    timestamps: true
}

)

export default mongoose.models.JobAdvert || mongoose.model('JobAdvert', jobAdvertSchema)
