import express from 'express';
import {getFavorite} from '../controllers/favorite.js';

const router = express.Router();

router.get('/', getFavorite);

 export default router;