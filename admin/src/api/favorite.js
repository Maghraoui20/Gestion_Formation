import axios from "axios";

const url1 = 'http://localhost:5010/favorite';


export const fetchFavorite = () => axios.get(url1);