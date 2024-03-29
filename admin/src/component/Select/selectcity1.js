import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import useStyles from './styles';


 const  Selectcity = ({handleChangecity,filtredCity } )  => {
 const classes = useStyles();
  return (

  <Autocomplete
  required
  onChange={handleChangecity}
  options={filtredCity}
  getOptionLabel={(option) => option.nom}
  renderInput={(params) => <TextField    {...params} label="ville"   
  variant="outlined"   className={classes.autocomplete}
  />}
/>
  );
};
export default Selectcity;