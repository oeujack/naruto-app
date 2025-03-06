export interface Personal {
  birthDate: string
  sex: string
  age: {
    partI: string
    partII: string
    academyGraduate: string
  }
  height: {
    partI: string
    partII: string
    blankPeriod: string
  }
  weight: {
    partI: string
    partII: string
  }
  bloodType: string
  kekkeiGenkai: string[]
  classification: string[]
  tailedBeast: string
  occupation: string[]
  affiliation: string[]
  team: string[]
  clan: string
}
