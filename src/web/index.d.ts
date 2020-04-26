export interface Game {
  id: number;
  name: string;
  streak: number;
  player: number;
  current_card: string;
  prompt: string;
  options: string[];
  current_hand: string[];
  completed: boolean;
}
