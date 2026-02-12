export type Coffee = {
  id: number;
  name: string;
  image: string;
  price: number;
  rating: number;
  votes: number;
  popular: boolean;
  available: boolean;
};

export type Buttons = {
  id: number;
  content: string;
  value: string;
};

export type Cards = {
  activeBtn: string;
  filter: Coffee[];
};
