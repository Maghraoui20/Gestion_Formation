import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import { useDispatch, } from 'react-redux';
import { getgouvernorat } from '../../actions/gouvernorat';
import { getCity } from '../../actions/cities';
import {getTrainings} from '../../actions/training';
import Map from './map';
import {Button} from '@material-ui/core';
import useStyles from './styles';
function rand() {
  return Math.round(Math.random() * 20) - 10;
}




export default function SimpleModal() {
    const dispatch = useDispatch();
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  
  const [open, setOpen] = React.useState(false);
 const [Gouvernorat, setGouvernorats] = useState([]);
    const [City, setCity] = useState([]);
    const [filtredCity, setfiltredCity] = useState([]);
const [FilterTraining, setFilterTraining]=useState([]);
const [Gouvernoratselected, setGouvernoratselected] = useState();
const  [Cityselected, setCityselected]= useState();
const [Trainings, SetTrainings] = useState([]);
const [gouv, setGouv] =useState();
const[citys, setCitys] = useState();
const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

  useEffect(() => {
    dispatch(getgouvernorat()).then((res) => {
        setGouvernorats(res);
    });
    dispatch(getCity()).then((res) => {
      setCity(res);
   
   });
   dispatch(getTrainings()).then((res) => {
     
    SetTrainings(res);
 });
 FilterTrainings();

 console.log("user",user.idgouvernorate);

 
}, []);




const FilterTrainings = (IdGouv, Idcity) =>{
  console.log( " gouv",Gouvernoratselected)
  console.log("city" ,Cityselected);
  if(Gouvernoratselected === undefined && Gouvernoratselected === undefined) 
  setFilterTraining(Trainings.filter((el)=> el.id_gouvernorate === user.idgouvernorate));
  console.log('tranfilter', FilterTraining);
 
  //gouvernorat
  if(IdGouv !==null) {
    setFilterTraining(Trainings.filter((el)=> el.idgouvernorate === IdGouv
    
    ) );
   
 
  }
 
    //gouvernorat+city
   else if( Idcity !== null) {
      setFilterTraining(Trainings.filter((el )=> el.idcity === Idcity));
    }
    //console.log("trainingfiltred",FilterTraining);
  

  
  };
const handleChangegouvernorat = (event, value) => {

  value === null ? setfiltredCity([]) :
  setfiltredCity(City.filter((x) => x.id_gouvernorat === value._id));
  //console.log( value);
  setGouvernoratselected(value._id);

  setGouv(value);
  let idcitys = null;
  
  FilterTrainings(Gouvernoratselected, idcitys );
    //console.log("gouverselec", Gouvernoratselected);
      
  };



const handleChangecity = (e, value) => {
  e.preventDefault();
  //console.log( value);
setCityselected(value._id);
setCitys(value)
let idgouv = null;
FilterTrainings(idgouv, Cityselected);

};





  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  

 
  const body = (
    <div className={classes.paper}>
      <div className={classes.auto}>
      <Autocomplete
        onChange={handleChangegouvernorat}
        options={Gouvernorat}
        getOptionLabel={(option) => option.nom}
        renderInput={(params) => <TextField    {...params} label="Gouvernorat"    variant="outlined" 
        className={classes.gouvernorats}
        />}
      />
      <Autocomplete
      onChange={handleChangecity}
      options={filtredCity}
      getOptionLabel={(option) => option.nom}
      renderInput={(params) => <TextField    {...params} label="ville"   
      variant="outlined"   className={classes.gouvernorats}
      />}
    />
    </div>
 <Map  

    FilteredTraining={FilterTraining}
    gouvernorat={gouv}
    city={citys}


/> 
    </div>
  );

  return (
    <div>
      <Button type="button" onClick={handleOpen}>
       voir map
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
      
    </div>
  );
}