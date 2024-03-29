import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({

 paper1 :{
   marginTop:100,
   width:1250,
   height:625,
   justifyContent: "center",
   borderRadius:0,

   '@media screen and (max-width: 900px)': {
    width:800,

   } , 
   '@media screen and (max-width: 800px)': {
    width:700,

   }   ,
   '@media screen and (max-width: 700px)': {
    width:600,

   } ,
   '@media screen and (max-width: 600px)': {
    width:500,

   } ,
   '@media screen and (max-width: 560px)': {
    width:500,

   } ,

 },

 avatar : {
  width:250,
  height:250,
  borderRadius:0,
 },
 avatarcenter : {
  width:480,
  height:220,
  borderRadius:0,

 },
  root: {
    marginTop: 100,
    width: 350,
    height:515,
    marginLeft:0,
    borderRadius:0,

    '@media  screen and (max-width: 1200px)': {
    
      marginLeft:48,
      marginRight:-35,
    },
    '@media  screen and (max-width: 960px)': {
      
      marginLeft:10,
      marginRight:-90,
  },
  '@media  screen and (max-width: 850px)':{
    marginRight:-90,
    marginLeft:-20,
    
  },
  '@media  screen and (max-width: 750px)':{
width:300,
marginRight:-90,
marginLeft:-20,
  },
  '@media  screen and (max-width: 520px)':{
marginLeft:10,
width:350,
  },
},
root1: {
  marginTop: 30,
  width: 350,
  height:515,
  marginLeft:180,
  position:"relative",
  '@media screen and (max-width: 1400px)':{
    width:315,
    marginLeft:"60%",
  },
  '@media screen and (max-width: 1100px)': {
    marginLeft:"40%",
  
  },
  '@media  screen and (max-width: 900px)': {
   marginTop:-1600,
width:500,
marginLeft:60,
  
},
"@media screen and (max-width: 800px)": {
  marginLeft: 50,
height:570,
marginTop:-1650,

},
'@media  screen and (max-width: 600px)': {
  marginTop:-1730,
width:410,
marginLeft:0,
height:515,
 
},


},
  media: {
    height: 50,
    paddingTop: "56.25%", 
   marginTop:-152,
   
  },

  buttonVoir: {
    color: " #f5f5f5",
    border:"2px solid",
    borderColor: "#4e3e8c",
    backgroundColor:"#4e3e8c",
    borderRadius:0,
  marginLeft:5,
    fontSize:12,
    marginRight:150,
    '&:hover': {
      background: "#ffffff",
      color: " #4e3e8c",
      marginTop:0,
  },
  },
  price: {
   marginLeft:270,
   position: "absolute",
   marginTop:45,
   '@media screen and (max-width: 1400px)': {
    marginLeft:260,
     
    
  },
   '@media screen and (max-width: 1100px)': {
    marginLeft:265,
     
    
  },
  '@media screen and (max-width: 800px)': {
    marginLeft:"650%",
     
    
  },
  '@media screen and (max-width: 600px)': {
    marginLeft:360,
     
    
  
  },
},
  prix : {
   color:'#ffffff',
   fontSize:24,
   marginLeft:0,
   
  },
  tnd :{
    marginLeft:5,
    color:'#ffffff',
    fontSize:14,
    '@media screen and (max-width: 1400px)': {
      marginLeft:5,
       
      
    },
     '@media screen and (max-width: 1100px)': {
      marginLeft:5,
       
      
    },
    '@media screen and (max-width: 900px)': {
      marginLeft:6,
       
      
    }
  },

  Placeicon : {
    fontSize:30,
    marginRight:10,
    marginTop:10,
    color:" #fa7d39",


  },
  lieu : {
    fontSize:16,
    textTransform:"capitalize",
    marginTop:20,
  },
  place :{
    display:'flex',
  },
  title :{
   fontSize:22,
   textTransform:"capitalize",
   marginLeft:10,
   color: "#4e3e8c",


  },
  MuiCardContentroot: {
    marginTop:5,

  },
  nbh: {
    fontSize:18,
    marginRight:15,

    marginTop:18,
  },
  duree :{
    marginTop:20,

  },
  svg :{
    display: "flex",
  
  },
  mauve :{
   marginLeft:260,
   '@media screen and (max-width: 1400px)': {
    marginLeft:248,
     
    
  },
  '@media screen and (max-width: 1100px)': {
    marginLeft:250,
     
    
  },
   '@media screen and (max-width: 900px)': {
    marginLeft:242,
     
    
  },
  '@media screen and (max-width: 800px)': {
    marginLeft:"635%",
     
    
  },
  '@media screen and (max-width: 600px)': {
    marginLeft:342,
     
    
  }
  
  },
  Container : {
  position:"relative",
  },

  
  btns :{
   display:"flex"
  },
  btnupdates :{
  color: "transparent",

  '&:hover': {
    background: "transparent",

},
  },
  iconupdates : {
    fontSize:35,
    color: '#4e3e8c',

  },

  iconsu : {
    marginLeft:10,
    color:"#fa7d39",
  },
  iconsu1 : {
    marginLeft:25,
    color:"#fa7d39",

  }

}));