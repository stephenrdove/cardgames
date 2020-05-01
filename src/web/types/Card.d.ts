import { CardValue } from './CardValue';
import { CardSuit } from './CardSuit';
import { CardColor } from './CardColor';

export interface Card {
  color: CardColor;
  suit: CardSuit;
  value: CardValue;
}
