import React, { useEffect ,useState} from 'react';
import { useDispatch } from 'react-redux';

import {Bar,Doughnut, Polar} from 'react-chartjs-2';
import useStyles from './styles';
import {getTrainingsformer,getTrainingsadmin,getTrainings} from "../../actions/trainings";
import {getFormer} from "../../actions/former";
import {getCentre} from '../../actions/center';
import {getClients} from '../../actions/users';
import {getBookings} from '../../actions/bookings';
import {getFavorite} from '../../actions/favorite';
const Statistique = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [Trainingscenter, SetTrainingscenter] = useState([]);
  const [Trainingsformer, SetTrainingsformer] = useState([]);
  const [Formers, SetFormers] = useState([]);
  const [centres, SetCentres] = useState([]);
  const [Clients, SetClients] = useState([]);
const[Admin, SetAdmin] = useState([]);
const [bookings,setBookings]=useState([]);
const[favorite,setFavorite] =useState([]);



  useEffect(() => {
    dispatch(getTrainings()).then((res) => {
      SetTrainingscenter(res.length);
 
    });
  
    dispatch(getTrainingsformer()).then((res) => {
      SetTrainingsformer(res.length);
 
    });
  dispatch(getFormer()).then((res) => {
SetFormers(res.length);
  } );
  dispatch(getCentre()).then((res) => {
    SetCentres(res.length);
      } );
      dispatch(getClients()).then((res) => {
        SetClients(res.length);
          } );

        dispatch(getTrainingsadmin()).then((res) => {
          SetAdmin(res.length);
            } );

dispatch(getBookings()).then((res)=>{
setBookings(res.length);

})
dispatch(getFavorite()).then((res)=>{
  setFavorite(res.length);
  
  })


  }, []); 
   
  

   
  return (
    <div>
    <div className={classes.divstat}>
    <div className={classes.bar}>
      <Bar 
        data={{

          labels: ['Formateurs', 'Centres de formations' , 'Admin'],
          datasets: [
   {
     label: 'Formations',
     backgroundColor: 'rgba(220, 118, 51,1)',
     borderColor: 'rgba(0,220, 118, 51,1)',
     borderWidth: 2,
     data: [Trainingsformer,Trainingscenter, Admin]
   }
 ]

        }}
        options={{
          title:{
            display:true,
            text:'Les formations ajoutées par',
            fontSize:20
          },
         
        }}
      />
    </div>
    <div className={classes.doughnut}>
    <Doughnut
          data={{labels: ['formateurs', 'centres de formations', 'clients'],
 datasets: [
   {
     backgroundColor: [
/*       '#B21F00',
 */       '#DC7633',
      '#2FDE00',
      
/*  '#56367a',
 */       '#6800B4'
      ],
     hoverBackgroundColor: [
     '#501800',
     '#4B5000',
     '#175000',
     '#003350',
     '#35014F'
     ],
     data: [Formers,centres, Clients]
   }
 ]}}
          options={{
            title:{
              display:true,
              //text:'Average Rainfall per month',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
    </div>
  

       
    </div>


<div  className={classes.div}>
   
<div className={classes.bar}>
    <Polar
          data={{labels: ['Réservations', 'favoris'],
 datasets: [
   {
     label: 'Rainfall',
     backgroundColor: [
       '#C9DE00',
       '#56367a',
    ],
     hoverBackgroundColor: [
     '#d3de6f',
     '#DC7633',
    
     ],
     data: [bookings,favorite]
   }
 ]}}
          options={{
            title:{
              display:true,
              //text:'Average Rainfall per month',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
    </div>
</div>
</div>
  );
};

export default Statistique;



