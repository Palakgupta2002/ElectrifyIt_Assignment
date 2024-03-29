import mongoose from "mongoose"


const vehicleSchema = new mongoose.Schema({
  VIN: {
    type: String,
    required: true,
    unique: true
  },
  Make: {
    type: String,
    required: true
  },
  Model: {
    type: String,
    required: true
  },
  Type: {
    type: String,
    required: true
  },
  Date: {
    type: Date,
    required: true
  },
  MilesDriven: {
    type: Number,
    required: true
  },
  
LicensePlate:{
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

const Vehicle = mongoose.model('Vehicles', vehicleSchema);

export default Vehicle
