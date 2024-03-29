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
router.post('/api/reports', async (req, res) => {
  const { reportType, frequency, timeFrame } = req.body;

  try {
    let result;

    switch (reportType) {
      case 'Total Miles Driven':
        result = await getTotalMilesDrivenReport(frequency, timeFrame);
        break;
      // case 'Energy Consumption':
      //   result = await getEnergyConsumptionReport(frequency, timeFrame);
      //   break;
      // case 'Cost Analysis':
      //   result = await getCostAnalysisReport(frequency, timeFrame);
      //   break;
      default:
        return res.status(400).json({ error: 'Invalid report type' });
    }

    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


async function getTotalMilesDrivenReport(frequency, timeFrame) {
  let groupByField;
  let groupByFormat;
  let dateRangeFilter = {};

  switch (frequency) {
    case 'Daily':
      groupByField = { $dateToString: { format: '%Y/%m/%d', date: '$Date' } };
      groupByFormat = 'YYYY/MM/DD';
      break;
    case 'Weekly':
      groupByField = { $week: '$Date' };
      groupByFormat = 'Week';
      break;
    case 'Monthly':
      groupByField = { $month: '$Date' };
      groupByFormat = 'Month';
      break;
    case 'Yearly':
      groupByField = { $year: '$Date' };
      groupByFormat = 'Year';
      break;
    default:
      throw new Error('Invalid frequency type');
  }

  if (timeFrame && timeFrame.startDate && timeFrame.endDate) {
    const startDate = new Date(timeFrame.startDate);
    const endDate = new Date(timeFrame.endDate);

    dateRangeFilter = {
      Date: { $gte: startDate, $lte: endDate }
    };
  }

  const result = await Vehicle.aggregate([
    { $match: dateRangeFilter },
    { $group: { _id: groupByField, totalMilesDriven: { $sum: '$Miles Driven' } } },
    { $sort: { _id: 1 } }
  ]);

  return {
    reportType: 'Total Miles Driven',
    frequency: frequency,
    timeFrame: timeFrame,
    data: result.map(item => ({
      [groupByFormat]: item._id,
      totalMilesDriven: item.totalMilesDriven
    }))
  };
}


export default router;