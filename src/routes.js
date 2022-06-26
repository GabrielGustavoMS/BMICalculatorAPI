const router = require('express').Router()
const BMICalculator = require('./app/controllers/BMICalculatorController')

router.get('/', (request, response) => {
  return response.json({
    message: 'For more information see the API documentation',
    documentationURL: 'https://github.com/GabrielGustavoMS/BMICalculatorAPI'
  })
})

router.get('/api', (request, response) => {
  const { weight, high } = request.query
  const bmiReport = BMICalculator.getBMIReport(weight, high)
  return response.json(bmiReport)
})

module.exports = router
