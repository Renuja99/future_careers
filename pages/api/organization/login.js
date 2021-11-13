
export default async (req, res) =>{



    const { email} = req.body ;
    res.status(200).json({ email: `Email of organization is ${email}` })
}