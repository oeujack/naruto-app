import type { Family } from './Family'
import type { Personal } from './Personal'

export interface Characters {
  id: number
  name: string
  images: string[]
  family: Family
  jutsu: string[]
  natureType: string[]
  personal: Personal
  rank: {
    ninjaRank: {
      partI: string
      gaiden: string
    }
    ninjaRegistration: string
  }
}

export interface CharactersResponse {
  characters: Characters[]
  currentPage: number
  pageSize: number
  total: number
}
