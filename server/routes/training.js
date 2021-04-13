import express from 'express';

import {creatTraining,  updateTraining, deleteTraining, getSearchedTraining ,getOneTraining ,getAllTrainings,getnameFormer} from '../controllers/training.js';
const router = express.Router();
router.post('/', creatTraining);
router.patch('/:id', updateTraining);
router.delete('/:id', deleteTraining);
router.get('/',getSearchedTraining);
router.get('/one',getOneTraining);
router.get('/all', getAllTrainings);
router.get('/nameformer', getnameFormer);

export default router ;

