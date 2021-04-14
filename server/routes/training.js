import express from 'express';

import {creatTraining,  updateTraining, deleteTraining, getSearchedTraining ,getOneTraining ,getAllTrainings,getnameFormer, creatTrainingcenter , getTrainingbyid} from '../controllers/training.js';
const router = express.Router();
router.post('/', creatTraining);
router.get('/',getSearchedTraining);
router.get('/one',getOneTraining);
router.get('/all', getAllTrainings);
router.get('/nameformer', getnameFormer);
router.post('/center', creatTrainingcenter);
router.patch('/update', updateTraining);
router.delete('/delete', deleteTraining);
router.get('/trainingbyid',getTrainingbyid);

export default router ;

