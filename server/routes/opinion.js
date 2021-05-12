import express from 'express';
import { Opiniontraining, getOpinions } from '../controllers/opinion.js';


const router = express.Router();
router.post('/',Opiniontraining);
router.get('/', getOpinions);

export default router ;