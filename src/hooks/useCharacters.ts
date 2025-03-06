import { useQuery } from '@tanstack/react-query'
import type { CharactersResponse } from '../types/Characters'
import { getAllCharacters } from '../services/characters'

export function useCharacters() {
  const useQueryCharacters = useQuery<CharactersResponse>({
    queryKey: ['getAllCharacters'],
    queryFn: () => getAllCharacters(),
    staleTime: Infinity,
    retry: 0,
  })

  return {
    ...useQueryCharacters,
    data: useQueryCharacters.data,
  }
}
