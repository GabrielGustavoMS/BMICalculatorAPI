class BMICalulator {
  constructor() {}

  calculateBMI(weight, high) {
    let bmi = Number(weight) / (Number(high) * Number(high))
    bmi = bmi.toFixed(2)
    return bmi
  }

  getBMICategorie(bmi) {
    if (bmi < 18.5) {
      return 'underweight'
    } else if (bmi >= 18.5 && bmi < 25) {
      return 'healthy weight'
    } else if (bmi >= 25 && bmi < 30) {
      return 'overweight'
    } else if (bmi >= 30 && bmi < 35) {
      return 'obesity class 1'
    } else if (bmi >= 35 && bmi < 40) {
      return 'obesity class 2'
    } else if (bmi >= 40) {
      return 'obesity class 3'
    }
  }

  getBMIReport(weight, high) {
    let bmi = this.calculateBMI(weight, high)
    let categorie = this.getBMICategorie(bmi)
    return {
      weight: weight,
      high: high,
      bmi: bmi,
      categorie: categorie
    }
  }
}

module.exports = new BMICalulator()
