import axios from "axios";

const url1 = 'http://localhost:5010/bookings/booking';
const url2 = 'http://localhost:5010/bookings/reserver';
const url3 = 'http://localhost:5010/bookings';

export const fetchBookings = () => axios.get(url1);
  
  export const reserverformation = (idtraining, RerservationData) => axios.post(url2,RerservationData, {params:{idtraining}});
export const fetchSearchedBooking =  (InputSearch) => {
  return axios.get(url3, { params: { InputSearch, }, })
};

