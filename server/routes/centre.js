import express from 'express';
import {getCentre,signupcentre,getOneCenter,getTrainingcenter} from '../controllers/center.js';

const router = express.Router();

router.get('/', getCentre);
router.post('/signup', signupcentre);
router.get('/one', getOneCenter);
router.get('/training',getTrainingcenter)

 export default router;