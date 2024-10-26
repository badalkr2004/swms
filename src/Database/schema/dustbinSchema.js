// models/garbage
import mongoose from 'mongoose';

const Dustbin = new mongoose.Schema({
  location_latitude: { type: String, required: true },
  location_longitude: { type: String, required: true },
  description: { type: String, required: true },
  address: { type: String, required: true },
  date_created: { type: Date, default: Date.now },
});

export default mongoose.models.Dustbin || mongoose.model('Dustbin' , Dustbin);
