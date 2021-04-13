import mongoose from 'mongoose';
const citiesSchema = mongoose.Schema({
nom:  String, 
id_gouvernorat: {type: mongoose.Schema.ObjectId, ref : 'gouvernorat'},
longitude:Number,
latitude:Number,
});
const  cities = mongoose.model('cities', citiesSchema);
export default cities; 