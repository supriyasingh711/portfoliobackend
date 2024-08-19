// portfolio.js
import express from 'express';
import { intro, about, techs, experiences, projects, contact } from '../models/portfolioModel.js';
const router=express.Router();
router.get("/get-portfolio-data", async (req, res) => {
    try {
        const intros = await intro.find();
        const abouts = await about.find();
        const project = await projects.find();
        const tech = await techs.find();
        const contacts = await contact.find();
        const experience = await experiences.find();

        res.status(200).json({
            intro: intros[2],
            about: abouts[0],
            projects: project,
            contact: contacts[0],
            experiences: experience,
            techs: tech
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
});

export default router;
