import express from 'express';
import {getBooking,Reserverformation,getSearchBooking} from '../controllers/bookings.js';

const router = express.Router();

router.get('/booking', getBooking);
router.post('/reserver',Reserverformation);
router.get('/',getSearchBooking);
export default router;
