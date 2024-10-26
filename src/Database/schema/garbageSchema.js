// models/garbage
import mongoose from 'mongoose';

const Garbage = new mongoose.Schema({
  location_latitude: { type: String, required: true },
  location_longitude: { type: String, required: true },
  garbage_type: { type: String, required: false },
  status: { type: String, required: false },
  description: { type: String, required: false },
  image: { type: String, required: false },
  address: { type: String, required: false },
  date_created: { type: Date, default: Date.now },
});

export default mongoose.models.GarbageDetail || mongoose.model('GarbageDetail' , Garbage);
