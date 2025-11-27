export type Characters = {
  id: number;
  name: string;
  rank: string;
  power: number;
  profile_image: string;
  summary: string;
  village: Pick<Village, 'id' | 'name'>;
};

export type Village = {
  id: number;
  name: string;
  symbol: string;
  characters: Pick<Characters, 'id' | 'name'>[];
};
