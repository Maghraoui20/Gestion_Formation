import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import useStyles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { getgouvernorat } from '../../actions/gouvernorat';

 const  Selectgouvernorat = ({onChangeGouvernorat,gouvernorat,value } )  => {
  const [isuser, setisuser]=useState((JSON.parse(localStorage.getItem('profile'))));

    const classes = useStyles();
     
  return (
    isuser ?
    <Autocomplete
    required
        onChange={onChangeGouvernorat}
        options={gouvernorat}
        value={{nom : value}}   
        getOptionSelected={(option,value) => option.nom === value.nom}
        getOptionLabel={(option) => option.nom}
        renderInput={(params) => <TextField    {...params} label="Gouvernorat"    variant="outlined" 
        className={classes.autocomplete}
        />}
      />
      : 
      <Autocomplete
      required
          onChange={onChangeGouvernorat}
          options={gouvernorat}
  
          getOptionLabel={(option) => option.nom}
          renderInput={(params) => <TextField    {...params} label="Gouvernorat"    variant="outlined" 
          className={classes.autocomplete}
          />}
        />
  );
};
export default Selectgouvernorat;