import axios from "axios";
const url1 = 'http://localhost:5010/user/clients';
const url2= 'http://localhost:5010/user/delete';
const url3 = 'http://localhost:5010/user/search';
const url4 = 'http://localhost:5010/bookings/booking';

export const fetchClient = () => {
    return axios.get(url1)
  };
  export const deleteUser = (id) => axios.delete(url2,{params:{id}});
  export const fetchSearchedUser = (InputSearch) => {
    return axios.get(url3, { params: { InputSearch, }, })
  };

  export const fetchNomUser =(id)=>axios.get(url4,{params:{id}});
  

