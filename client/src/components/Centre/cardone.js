import React, { useState,useEffect } from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Button,
  Typography,
  Avatar,
} from "@material-ui/core";
import WbIncandescentIcon from '@material-ui/icons/WbIncandescent';
import PlaceIcon from "@material-ui/icons/Place";
import PhoneIcon from '@material-ui/icons/Phone';
import useStyles from "./styles";

const CardOne = ({ Centre}) => {
  const classes = useStyles();
  return (
    <Card className={classes.root1}>
     
     <CardMedia className={classes.media} image={Centre.selectedimage} />

      
    <CardContent >
        <div className={classes.formatdate}>
        <span className={classes.title}>{Centre.lastname} </span>
        </div>
        
        <div className={classes.place}>
           <WbIncandescentIcon className={classes.Placeicon} />   
           <span className={classes.lieu}> Domaine :  { Centre.namespeciality}</span>
        </div>
        <div className={classes.place}>
           <PlaceIcon className={classes.Placeicon} /> 
           <span className={classes.lieu}>{Centre.namegouvernorate} / {Centre.namecities}</span>
        </div> 
      
       
        <div className={classes.place}>
           <PhoneIcon className={classes.Placeicon} /> 
           <span className={classes.lieu}>{Centre.phone}</span>
        </div>
      </CardContent>
    

    </Card>
  );
};
export default CardOne;