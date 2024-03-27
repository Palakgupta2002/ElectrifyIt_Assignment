import mongoose from "mongoose"


const vehicleSchema = new mongoose.Schema({
  VIN: {
    type: String,
    required: true,
    unique: true
  },
  make: {
    type: String,
    required: true
  },
  model: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  milesDriven: {
    type: Number,
    required: true
  },
  LicencePlate:{
    type:String,
    required:true
  }

});
vehicleSchema.pre('save', async function(next) {
    try {
        if (!this.isNew) {
           
            return next();
        }
    
        const count = await this.constructor.countDocuments();
     
        this.VIN = `100${count + 1}`;
        next();
    } catch (error) {
        next(error);
    }
});

const Vehicle = mongoose.model('Vehicle', vehicleSchema);

export default Vehicle
