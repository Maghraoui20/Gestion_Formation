import express from 'express';
import { getFormer,signupformer,getOneFormer,getTrainingFormer ,getFormers,deleteFormer,getSearched} from '../controllers/former.js';

const router = express.Router();

router.get('/', getFormer );
router.post('/signup', signupformer);
router.get('/one', getOneFormer);
router.get('/trainings', getTrainingFormer);
router.get('/formers',getFormers);
router.get('/Allformers',getFormers);
router.delete('/delete',deleteFormer);
router.get('/search', getSearched);

 export default router;