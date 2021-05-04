
import React, { useState,useEffect } from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Grid,
   TextField,
       FormLabel
} from "@material-ui/core";
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import CloseIcon from "@material-ui/icons/Close";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import PlaceIcon from "@material-ui/icons/Place";
import PeopleIcon from "@material-ui/icons/People";
import moment from "moment";
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import useStyles from "./styles";
import { ReactComponent as ReactLogo } from '../Pictures/Tracé 3.svg';
import {Reserverformation} from '../../actions/bookings';
import { useDispatch } from 'react-redux';



  const Modal1 = ({ handleClose,idtraining, open, setOpen}) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const [userinfos, setuserinfos] = useState(JSON.parse(localStorage.getItem('profile')));

    const [RerservationData, setRerservationData]= useState({ iduser:userinfos._id,phone:'', payement:'',idtraining:idtraining,cin:''});
const handleClick =()=> {
  
        dispatch(Reserverformation(idtraining,RerservationData));
     
}
    return (


<Modal
aria-labelledby="transition-modal-title"
aria-describedby="transition-modal-description"
className={classes.modal}
open={open}
onClose={handleClose}
closeAfterTransition
BackdropComponent={Backdrop}
BackdropProps={{
    timeout: 500,
}}
>
<Fade in={open}>
    <div className={classes.paper1}>
        <div className={classes.titleicon}>
        <h3 className={classes.reserver}>Réserver Formation </h3>

            <Button
                className={classes.openicon}
                onClick={() => {
                    setOpen(!open);
                }}
            >
                <CloseIcon className={classes.iconclose} />
            </Button>
        </div>
        <Grid container>
        <Grid item xs={12} lg={8} sm={4} md={4} >
            <div className={classes.divrev}>
            <TextField className={classes.textreservation1} name="phone" label="Numéro de téléphone" type="string" variant="outlined" value={RerservationData.phone} onChange={(e)=> setRerservationData({...RerservationData, phone: e.target.value})} className={classes.phonenumber}> </TextField>
         <TextField required className={classes.textreservation} name='cin' variant="outlined" label=" Carte d'intentité" type="String" value={RerservationData.cin} onChange={(e) => setRerservationData({ ...RerservationData, cin: e.target.value })} ></TextField>

            </div>
        
        <FormLabel className={classes.labels} component="legend">Informations de Payemenet</FormLabel>
  <RadioGroup aria-label="booking" name="booking" value={RerservationData.payement} onChange={ (e) => setRerservationData({ ...RerservationData, payement: e.target.value }) }>
  <div className={classes.radio}>
      <FormControlLabel value="payer en avance " control={<Radio style={{ color: '#4e3e8c' }} />} label={<span className={classes.words} >Payer en avance</span>} />
      <FormControlLabel value="payer  le jour de formation " control={<Radio style={{ color: '#4e3e8c' }} />} label={<span className={classes.words} >Payer  le jour de formation </span>} />
    </div>
  </RadioGroup>

            </Grid>
            
            <Grid item xs={12} lg={8} sm={4} md={4}>
                <div className={classes.buttonac}>
            <Button className={classes.confirmer} onClick={handleClick}>Confirmer </Button>

                <Button className={classes.Annuller} onClick={() => {
                setOpen(!open);
                }}>Annuler</Button>
                </div>
            </Grid>
            </Grid>
    </div>

</Fade>
</Modal>
    )};
    export default Modal1;
