import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    bar:{
        width:400,
        marginLeft:350,
        height:200,
        marginTop:30,
        marginBottom:30,
    },
    doughnut:{
        width:350,
        marginLeft:150,
        height:150,
        marginTop:30,
    },
    divstat:{
        display:'flex',
    },
    
    
      openicon: {
        marginLeft: 415,
    
        color: 'transparent',
        '&:hover': {
          background: 'transparent',
        },
     
      },
      iconclose: {
        fontSize: 25,
        color: "#4C4C4C",
      },
      titleicon: {
        display: "flex",
        width:"100%",
      },
    
      tantque: {
        color: '#fa7d39',
        marginLeft:20,
      
      },
      img1: {
        marginTop: 10,
        marginLeft: 0,
        marginRight:30,
      
  
      },
      img2: {
        marginTop: 0,
        marginLeft: 90,
      
  
      },
  
      centre: {
        marginLeft: 120,
        color: '#fa7d39',
        fontWeight: "bolder",
        width:"100%",
        display:"flex",
      
      },
      formateur: {
        marginLeft: 95,
        marginRight: 40,
        color: '#fa7d39',
        fontWeight: "bolder",
     
      },
    
     
      btncf: {
        marginTop: 20,
        marginLeft: 120,
        background: '#4e3e8c',
        color: "#f5f5f5",
        width: 120,
        '&:hover ': {
          background: '#4e3e8c',
          color: "#f5f5f5",
          transform: " scale(1.1)",
    
        },
  
      },
      btnf: {
        marginTop: 15,
        marginLeft: 75,
        background: '#4e3e8c',
        color: "#f5f5f5",
        width: 120,
        '&:hover ': {
          background: '#4e3e8c',
          color: "#f5f5f5",
          transform: " scale(1.1)",
    
        },
   
      },
    
    icon: {
      color:'#DC7633',
      fontSize:30,
    },
    divicons: {
      display:"flex",
      marginRight:0,
    },
    icon1: {
      color:'#DC7633',
    },
  
    cell : {
      backgroundColor:"#ffffff",
      
    },
    head : {
      color:"#DC7633",
      '&:hover ': {
        color: "#4e3e8c",}
    },
    maps: {
      marginTop:"50%",
      marginLeft:60,
    },
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      outline: 0,
      marginLeft:-180,
      marginTop:-30,
    marginRight:40,},

    paper1: {
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      width: 700,
      height: 350,
      outline: 0,
      marginTop: 30,
      marginLeft:250,
    marginBottom:50,},

      paperform: {
        paddingLeft:10,
        marginLeft:310,
        marginTop:10,
      },
      textf1:{
        marginTop:20,
        marginBottom:30,
      },
      map:{marginTop:20,
        width:500,
      },
      Textfiled:{
        width:4000,
        display:"flex"
      },
      divtext:{
        display:"flex"

      },
      textf2:{
        marginLeft:10,
        marginTop:20,

      },
      typoggraphy: {
        margin:20,
        color: "#4e3e8c",
      },
      div: {
        marginLeft: 10,
        paddingTop: 25,
      },
      label: {
        paddingRight: 5,
        color: "blue",
        paddingBottom: 5,
        marginTop: 15,},
        error : {
          color :' #ff1744',
          },

          buttonSubmit: {
            marginTop: 20,
            marginLeft: 110,
          marginBottom:40,
          color:"#4e3e8c",

          '&:hover': {
            background: "#4e3e8c",
            color: " #ffffff",}
        
        },
        divrev:{
          display:"flex",
          marginLeft:50,
        },
        textreservation:{
          marginLeft:50,
        },
        textreservation1:{
          marginLeft:50,
        },
        labels:{
          marginTop: 30,
          marginLeft:60,
          marginBottom:20,
        },
        buttonac:{
          marginTop: 30,
          display:"flex",
          marginLeft:120,
        },
        confirmer:{
          color:"#4e3e8c",

          '&:hover': {
            background: "#4e3e8c",
            color: " #ffffff",}
        },
        Annuller:{
          color:"#4e3e8c",
          marginLeft:20,
          '&:hover': {
            background: "#4e3e8c",
            color: " #ffffff",}
        },
        reserver:{
          color: '#fa7d39',
          marginLeft:50,
          marginBottom:30,

        },
        radio:{
          marginLeft:50,
        }



}))