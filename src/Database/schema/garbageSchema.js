// models/garbage
import mongoose from 'mongoose';

const Garbage = new mongoose.Schema({
  location_latitude: { type: String, required: true },
  location_longitude: { type: String, required: true },
  garbage_type: { type: String, required: true },
  status: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  address: { type: String, required: true },
  date_created: { type: Date, default: Date.now },
});

export default mongoose.models.GarbageDetail || mongoose.model('GarbageDetail' , Garbage);
