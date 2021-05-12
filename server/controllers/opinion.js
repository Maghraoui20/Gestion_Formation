import Opinion from '../models/opinion.js';


export const Opiniontraining = async (req, res) => {
    const ratingvalue = req.body.ratingvalue
    const iduser = req.body.idu;
    const comment= req.body.comment;
    const idtraining= req.body.id
   
    const newopinion = new Opinion({
       
      
        idtraining,
        comment,
        iduser,
        ratingvalue
    });
    try {
      await newopinion.save();
    } 
    catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
   export const getOpinions = async (req, res) => {
    try {
      const opinions = await Opinion.find();
      res.status(200).json(opinions);
    }catch(error) {
       res.status(404).json({message: error.message});
    }
};