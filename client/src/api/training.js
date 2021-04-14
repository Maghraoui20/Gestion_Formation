import axios from "axios";

const url = 'http://localhost:5010/training';
const url1 = 'http://localhost:5010/training/center';
const url0 = 'http://localhost:5010/training/trainingbyid';

const url2 = 'http://localhost:5010/paging/page';
const url3 = 'http://localhost:5010/paging/pageshow';
const url4 = 'http://localhost:5010/paging/recent';
const url5 = 'http://localhost:5010/training/one';
const url6 = 'http://localhost:5010/training/all';
const url7 = 'http://localhost:5010/training/nameformer';
const url8= 'http://localhost:5010/training/update';

const url9= 'http://localhost:5010/training/delete';

export const fetchTraining = (page, value,categoriesids,heures,gouvernoratid,cityid,datedeb,datefin,selected,InputSearch) => {
  return axios.get(url2, {
    params: { page,value,categoriesids,heures,gouvernoratid,cityid,datedeb,datefin,selected,InputSearch }
  })
};
export const fetchrecentTraining = (page) => {
  return axios.get(url4, {
    params: { page}
  })
};
export const fetchnotshowfilter = (page) => {
  return axios.get(url3, {
    params: { page}
  })
};
export const fetchSearchedTraining = (InputSearch) => {
  return axios.get(url, { params: { InputSearch, }, })
};
export const creatTraining = (newformation,id) => axios.post(url, newformation,{params:{id}});
export const creatTrainingcenter = (newformation,id) => axios.post(url1, newformation,{params:{id}});



export const updateTraining = (id, updatedFormation) => axios.patch(url8,updatedFormation,{params:{id}});
export const deleteTraining = (id) => axios.delete(url9,{params:{id}});

export const fetchOneTraining = (id) => {
  return axios.get(url5,{params:{id}})
};


export const fetchTrainings=() => axios.get(url6);
export const fetchnameFormer =() => axios.get(url7);


export const fetchTrainingbyid = (id) => {
  return axios.get(url0,{params:{id}})
};