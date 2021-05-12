import * as api from '../api/opinions.js';
export const getOpinions = () => async (dispatch) => {
    try {
        const {data} = await api.fetchOpinions();
        dispatch ({type: 'FETCH_ALL', payload:data}) ; 
        return data;
    } catch (error) {
    console.log(error.message);
    }
};
