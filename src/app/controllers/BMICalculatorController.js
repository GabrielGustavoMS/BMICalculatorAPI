class BMICalulator {
  constructor() {}

  calculateBMI(weight, height) {
    let bmi = Number(weight) / (Number(height) * Number(height))
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

  getBMIReport(weight, height) {
    let bmi = this.calculateBMI(weight, height)
    let categorie = this.getBMICategorie(bmi)
    return {
      weight: weight,
      height: height,
      bmi: bmi,
      categorie: categorie
    }
  }
}

module.exports = new BMICalulator()
