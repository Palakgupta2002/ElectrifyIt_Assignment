import express from "express"
const router = express.Router();
import Vehicle from "../Models/VehicaleSchema.js";

router.get('/VehicleData', async (req, res) => {
    try {
        
        const vehicle = await Vehicle.find();
        res.json(vehicle);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

export default router;