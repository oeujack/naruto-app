import type { Characters } from '@models/characters';
import { getCharacters } from '@services/characters-service';
import { useQuery } from '@tanstack/react-query';

export function useQueryGetCharacters() {
  const useQueryEstados = useQuery<Characters[]>({
    queryKey: ['useQueryGetCharacters'],
    queryFn: () => getCharacters(),
    staleTime: Infinity,
    retry: 0,
  });

  return useQueryEstados;
}
