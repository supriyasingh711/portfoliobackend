import mongoose from "mongoose";

const projectsSchema=new mongoose.Schema({
    name:String,
    description:String,
    status:String,
    startDate:Date,
    endDate:Date
})
const Project=mongoose.model('Project',projectsSchema);

const projects=[
    {
        name:"Hotel Booking Application",
        description:"thia app provides several features to book any hotel online.",
        status:"work in progress",
        startDate:new Date('2024-07-03'),
        endDate:new Date('2024-08-01')
    }
]
async function insertProjects(){
    try{
        await Project.insertMany(projects);
        console.log("projects inserted successfully");

    }catch(error){
        console.error("error inserting projects",error);

    }
}
insertProjects();