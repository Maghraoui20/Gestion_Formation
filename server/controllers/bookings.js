
import Booking from '../models/booking.js';
import Training from '../models/training.js';
import User from '../models/user.js';


export const getBooking = async (req,res) => {
  
  try {
    const booking = await Booking.aggregate([
      {
        $lookup: {
          from: "users",
          localField: "iduser",
          foreignField: "_id",
          as: "users",
        },
      },

      {
        $unwind: "$users",
      },
          {
        $lookup: {
          from: "trainings",
          localField: "idtraining",
          foreignField: "_id",
          as: "trainings",
        },
      },

      {
        $unwind: "$trainings",
      },
       { $project:{
         
          "users.firstname":1,
          "users.lastname":1,
          "users.cin":1,

          "phone":1,
          "_id":0,
          "trainings.name":1,
          "trainings.firstdate":1,
          "trainings.lastdate":1,
          "trainings.namegouvernorate":1,
          "trainings.namecity":1,


        }} ,
    ]);

    res.status(200).json(booking);

  } catch (error) {
    res.status(404).json({ message: error.message });
  };
};
export const getSearchBooking = async (req,res) => {
  
  const wordsearched = req.query.InputSearch.replace( /\s\s+/g, ' ' );
  try {
    const bookingserched = await Booking.aggregate([
      {
        $lookup: {
          from: "users",
          localField: "iduser",
          foreignField: "_id",
          as: "users",
        },
      },

      {
        $unwind: "$users",
      },
          {
        $lookup: {
          from: "trainings",
          localField: "idtraining",
          foreignField: "_id",
          as: "trainings",
        },
      },

      {
        $unwind: "$trainings",
      },
      {
        $match:{
          $or: [
            { "users.firstname": { $regex: wordsearched } },
            { "users.lastname": { $regex: wordsearched } },

            { "trainings.name": { $regex: wordsearched } },
           
          ],
        }
      },
    ]);

    res.status(200).json(bookingserched);

  } catch (error) {
    res.status(404).json({ message: error.message });
  };
};

export const Reserverformation = async (req, res) => {
    const {
     
       phone,
      idtraining,
      cin,
      status
    }= req.body

const identfiant = req.body.cin;
const user = await User.findOne({cin : identfiant });
const iduser = user._id;
  const newReservation = new Booking({
    iduser,
      phone,
      idtraining,
      cin,
      status
    });
    try {
    await newReservation.save();
    res.status(201).json(newReservation);
    } 
    catch (err) {
   
      res.status(500).json({ message: err.message });
    }
  }

  export const CancelReservation =  async (req, res) => {
    try {
    const id = req.query.iduser;
    const id2 = req.query.idtraining;
    const idbook = await Booking.findOne({iduser: id, idtraining: id2});
    await Booking.findByIdAndRemove(idbook._id);
    res.json({ message: "la formation a ete supprimer avec succés !" });
  }catch (error) {
 
    res.status(402).json({ message: error.message });
    console.log(error.message);
  }
  }
  export const Reservationcancled =  async (req, res) => {
    try {
    const id = req.query.iduser;
    const id2 = req.query.idtraining;
    const idbook = await Booking.findOne({iduser: id, idtraining: id2});
    await Booking.findByIdAndRemove(idbook._id);
    res.json({ message: "la formation a ete supprimer avec succés !" });
    const training = await Training.findOneAndUpdate({_id:id2}, {$inc: {numberplace: 1}});
  }catch (error) {
    res.status(402).json({ message: error.message });
    console.log(error.message);
  }
  }
  export const Getreservationbyid = async (req, res) => {
    let trainingsidvalider=[];
    let trainingsidannuler=[];
    let trainingidvide=[];
    try {
      const id = req.query.iduser;
      const trainings = await Booking.find({iduser: id});
      trainings.map((el)=> {
        if ( el.status === "Valider"  ){
        trainingsidvalider.push(el.idtraining);
        }
        else if ( el.status ==="Annuler")
        {
          trainingsidannuler.push(el.idtraining);
        }
        else if (el.status ===''){
          trainingidvide.push(el.idtraining);
        }
        })
        res.status(200).json(
          {trainingsidvalider,trainingsidannuler,trainingidvide}
        )
    }
    catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  export const getreservedtraining = async (req,res) => {
    let ids=[];
    let idsatt=[];
    try {
      const id = req.query.iduser;

      const page = parseInt(req.query.page || "1");
      const PAGE_SIZE = 4;
      const trainingsresev = await Booking.find({iduser: id, status:"Valider"}).select({"idtraining":1, "_id":0});
      const trainingsattente = await Booking.find ({iduser:id,status:""}).select({"idtraining":1,"_id":0});
      trainingsresev.map((el)=> {
        ids.push(el.idtraining);
      })
      trainingsattente.map((e)=> {
        idsatt.push(e.idtraining);
      })
     
        const trainings = await Training.find({ _id:{$in:ids}}).limit(PAGE_SIZE).skip(PAGE_SIZE* (page - 1))
        const trainingsatt = await Training.find({ _id:{$in:idsatt}}).limit(PAGE_SIZE).skip(PAGE_SIZE* (page - 1))

      
        
        res.status(200).json(
         { trainings, ids , idsatt,
          trainingsatt}
        );
    }
    catch (err) {
      res.status(500).json({ message: err.message });
      console.log(err)
  
    }
  }