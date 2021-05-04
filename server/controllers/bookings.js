import Booking from '../models/booking.js';

import Training from '../models/training.js';

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
          "payement":1,
          "trainings.name":1,
          "trainings.firstdate":1,
          "trainings.lastdate":1,
          "trainings.namegouvernorate":1,
          "trainings.namecity":1,


        }} ,
    ]);
    console.log(booking);

    res.status(200).json(booking);

  } catch (error) {
    res.status(404).json({ message: error.message });
  };
};
export const Reserverformation = async (req, res) => {
    const {
      iduser,
      phone,
      payement,
      cin,
      idtraining,
    }= req.body
    const newReservation = new Booking({
      iduser,
      phone,
      payement,
      cin,
      idtraining,
    });
    try {
     const id = req.query.idtraining;
     const formation = await Training.findOne({_id: id});
     if (formation.numberplace>0){
       console.log(formation.numberplace)
      var  flag = -1;
      await newReservation.save();
      await Training.findByIdAndUpdate(  id, { $inc: {
        numberplace: flag
        }
  
     }
      )
    }
    else return res.status(404).json({ message: "formations saturée" })
  }
    catch (err) {
      res.status(500).json({ message: err.message });
      console.log(err.message)
  
    }
  };
export const getSearchBooking = async (req,res) => {
  console.log("params", req.query.InputSearch);
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

  