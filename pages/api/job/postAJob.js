import ConnectDB from '@/DB/connectDB';
import validateToken from '@/middleware/tokenValidation';
import Job from '@/models/Job';
import User from '@/models/User';
import Joi from 'joi';

// Configuring mailtrap API
const { MailtrapClient } = require("mailtrap");

const TOKEN = process.env.MAILTRAP_API_TOKEN;

const client = new MailtrapClient({
    token: TOKEN,
})

const sender = {
    email: process.env.MAILTRAP_EMAIL, // Replace with your Mailtrap sender email
    name: "JobSewa",
}
// 

const schema = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    user: Joi.required(),
    email: Joi.string().email().required(),
    company: Joi.string().required(),
    job_category: Joi.string().required(),
    job_type: Joi.string().required(),
    job_experience: Joi.string().required(),
    job_vacancy: Joi.number().required(),
    job_deadline: Joi.date().required(),
    salary: Joi.number().required()
});


export default async (req, res) => {
    await ConnectDB();
    const { method } = req;
    switch (method) {
        case 'POST':
            await validateToken(req, res, async () => {
                await postAJob(req, res);
            });
            break;
        default:
            res.status(400).json({ success: false, message: 'Invalid Request' });
    }
}

const postAJob =  async (req, res) => {
    await ConnectDB();
    const data = req.body;
    const { user ,title,description , salary , company , email , job_category , job_type , job_experience , job_vacancy , job_deadline } = data;
    const { error } = schema.validate({ user ,title,description , salary , company , email , job_category , job_type , job_experience , job_vacancy , job_deadline });

    if (error) return res.status(401).json({ success: false, message: error.details[0].message.replace(/['"]+/g, '') });

    // try {
    //     const creatingJob =  await Job.create({user , title,description , salary , company , email , job_category , job_type , job_experience , job_vacancy , job_deadline  });
        
    //     // Fetch users with matching job category
    //     const users = await User.find({ jobCategories: job_category });
        

    //     // Send email to each user
    //     const emailPromises = users.map(user => {
    //         console.log(user.email);
    //         return client.bulk.send({
    //           from: sender,
    //           to: [{ email: user.email }],
    //           subject: `New Job Posting: ${title}`,
    //           text: `Hello ${user.name},\n\nA new job in your interested category (${job_category}) has been posted.\n\nJob Title: ${title}\nCompany: ${company}\nDescription: ${description}\nDeadline: ${job_deadline}\n\nBest regards,\nJobSewa`,
    //           category: "Job Notification",
    //         });
    //       });

        // Wait for all emails to be sent
        // await Promise.all(emailPromises)
        //     .then(() => console.log("All emails sent successfully"))
        //     .catch(console.error);


    //     return res.status(200).json({ success: true, message: "Job Posted Successfully !" })
    // } catch (error) {
    //     console.log('Error in posting a job (server) => ', error);
    //     return res.status(500).json({ success: false, message: "Something Went Wrong Please Retry login !" })
    // }
    return res.status(200).json({ success: true, message: "Job Posted Successfully !" })
}

