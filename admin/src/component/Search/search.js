import React, { useEffect, useState } from 'react';
import useStyles from './styles';
import TuneIcon from '@material-ui/icons/Tune';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';



const Recherche = ({handlechangeRecherche}) => {
    const classes = useStyles();
    return (
        <div className={classes.barre}>
             <div className={classes.search1}>
            <div className={classes.searchIcon1}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Rechercher..."
              onChange={handlechangeRecherche}
              
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
           

        </div >



    );
};
export default Recherche;