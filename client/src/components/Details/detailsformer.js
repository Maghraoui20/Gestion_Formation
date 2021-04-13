import React ,{ useState, useEffect } from "react";
import CardOne from "../Former/cardone";
import useStyles from './styles';

import {Grid, Paper,Link, Button} from '@material-ui/core';
import { useDispatch } from "react-redux";
import {getOneFormer} from '../../actions/former';
import EmailIcon from '@material-ui/icons/Email';
import WcIcon from '@material-ui/icons/Wc';
import PhoneIcon from '@material-ui/icons/Phone';
import {ReactComponent as Graduate} from "../Pictures/graduate.svg";

const DetailsFormer = () => {
    const dispatch = useDispatch();
    const [OneFormer, setOneFormer] = useState([]);
    const url = window.location.href;
    console.log(url);
const idformer = url.substr(32);
console.log('former');
const [viewPdf, setViewPdf]=useState(null);

useEffect(() => {
    
    dispatch(
        getOneFormer(idformer )
    ).then((res) => {
        setOneFormer(res.OneFormer);
        {
            OneFormer.map((e)=>
            setViewPdf(e.selectedFile)
            )
        }
    });

  }, [dispatch]);
 





const classes = useStyles();
 


return (
    <div className={classes.root} >
        
              
        < Grid container >
       <Grid item lg={6}> 
       <Paper elevation={3} className={classes.paper}>
    
    
       <div className={classes.div1}>
               <h3 className={classes.resumé}>Résumé : </h3>
               {OneFormer.map((e)=>
               <span className={classes.resumformer}>{e.description}</span>)}
           </div>
           <div className={classes.div2}>
               <span className={classes.icongender}> <WcIcon/></span>
               <h3 className={classes.sexe}>Sexe </h3>
               {OneFormer.map((e)=>
               <span className={classes.sexetext}>{e.gender}</span>)}
           </div>
           <div className={classes.div2}>
                <span className={classes.iconemail}><EmailIcon/></span>
                <h2  className={classes.mail}>Email</h2>
                {OneFormer.map((e) => (
                  <span className={classes.e_mail}>{e.email}</span>
                ))}
              </div>
           
           <div className={classes.div2}>
               <span className={classes.iconphone}><PhoneIcon /></span>
               <h3 className={classes.phone}>Numéro de téléphone </h3>
               {OneFormer.map((e)=>
               <span className={classes.num}>{e.phone}</span>)}
           </div>
           <div className={classes.div2}>
           <span className={classes.graduatef}><Graduate/></span>

               <h3 className={classes.formation}>formations </h3>
               {OneFormer.map((e)=>
               <span className={classes.nbre}>{e.training.length}</span>)}
           </div>
         
           <Button className={classes.pdf} href="/cv">Voir CV</Button>{
                   OneFormer.map((e) => 
                       
                   {localStorage.setItem('cv', e.selectedFile)}
             
    
    )
}
        
       </Paper>
       </Grid>



    <Grid  item lg={6} className={classes.cardformer}        >
         {!OneFormer
            ? null
            : OneFormer.map((Former) => (
                
                  <CardOne Former={Former} key={Former._id} elevation={3} />
    
              ))} 
           

        </Grid>










        </Grid>
   </div>

);

};
export default DetailsFormer;