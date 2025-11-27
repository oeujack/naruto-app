import type { Characters } from '@models/characters';
import { ENV } from '../env';
import axios from 'axios';

const api = axios.create({
  baseURL: ENV.BASE_URL,
});

export async function getCharacters(): Promise<Characters[]> {
  const response = await api.get<Characters[]>(
    `${ENV.BASE_URL}${ENV.CHARACTERS}`
  );
  return response.data;
}

export async function getCharactersById(id: number): Promise<Characters[]> {
  const response = await api.get(`${ENV.BASE_URL}${ENV.CHARACTERS}/${id}`);
  return response.data;
}
