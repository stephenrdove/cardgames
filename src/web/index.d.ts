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

export const enum CardColor {
  Red = 'red',
  Black = 'black',
}

// export type CardColor = 
//   | 'red'
//   | 'black';

export const enum CardSuit {
  Hearts = '\u2665',
  Clubs = '\u2663',
  Diamonds = '\u2666',
  Spades = '\u2660',
}

// export type CardSuit = 
//   | '\u2665'
//   | '\u2663'
//   | '\u2666'
//   | '\u2660';

// export type CardValue =
//   | '1'
//   | '2'
//   | '3'
//   | '4'
//   | '5'
//   | '6'
//   | '7'
//   | '8'
//   | '9'
//   | '10'
//   | 'J'
//   | 'Q'
//   | 'K'
//   | 'A';

export const enum CardValue {
  One = '1',
  Two = '2',
  Three = '3',
  Four = '4',
  Five = '5',
  Six = '6',
  Seven = '7',
  Eight = '8',
  Nine = '9',
  Ten = '10',
  Jack = 'J',
  Queen = 'Q',
  King = 'K',
  Ace = 'A',
}

export interface Card {
  color: CardColor;
  suit: CardSuit;
  value: CardValue;
}
