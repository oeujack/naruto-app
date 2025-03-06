import type { CharactersResponse } from '../types/Characters'
import axios from 'axios'

export const apiUrl = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
})

export async function getAllCharacters(): Promise<CharactersResponse> {
  const response = await apiUrl.get<CharactersResponse>('/characters')
  return response.data
}
