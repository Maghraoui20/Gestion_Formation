import axios from 'axios';

const url1 = 'http://localhost:5010/opinion';




export const fetchOpinions = () => axios.get(url1);