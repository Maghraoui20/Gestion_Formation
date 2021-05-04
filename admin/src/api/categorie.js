import axios from 'axios';

const url = 'http://localhost:5010/categorie';
const url2 = 'http://localhost:5010/categorie';
const url3 = 'http://localhost:5010/categorie';
const url4 = 'http://localhost:5010/categorie/search';


export const fetchcategorie = () => axios.get(url);
export const categories =(CategorieData) =>axios.post(url2,CategorieData);
export const Updatecategorie = (id, updatedcategorie) => axios.patch(url3,updatedcategorie,{params:{id}});
export const fetchSearchedCategorie=  (InputSearch) => {
    return axios.get(url4, { params: { InputSearch, }, })
  };
  
  