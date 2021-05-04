import { makeStyles } from '@material-ui/core/styles';
export default makeStyles((theme) => ({

    barre: {
        marginTop:-55,
        marginBottom:50,
        display: "flex",
      
     },
     search1: {
        borderRadius: theme.shape.borderRadius,
        marginLeft: 850,
        marginRight:260,
        display: 'flex',
        position:'realative',
        backgroundColor:"#D0D3D4",
        '&:hover': {
          backgroundColor:"#D0D3D4",
        },
          [theme.breakpoints.up('sm')]: {
        width: 'auto', 
        }, 
       
         
     },
      searchIcon1: {
         position: 'absolute',
         pointerEvents: 'none',
         alignItems: 'center',
         justifyContent: 'center',
         marginTop:3,
         marginLeft:180,
         color:'#fa7d39',
      },

      inputInput: {
        // vertical padding + font size from searchIcon
        paddingLeft:100,  
              paddingRight:70,

        transition: theme.transitions.create('width'),
      [theme.breakpoints.up('sm')]: {
        width: '16ch',
        '&:focus': {
         width: '22ch',
        },
      },
      
    
    },


}));