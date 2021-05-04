import mongoose from 'mongoose';
const bookingSchema = mongoose.Schema({
idtraining:  {type: mongoose.Schema.ObjectId, ref : 'trainings'}, 
payement: String, 
phone: String,
cin:{type: String , minlength:8} , 
iduser: {type: mongoose.Schema.ObjectId, ref : 'users'},

});
const  booking = mongoose.model('booking', bookingSchema);
export default booking; 