// import {
//   Card,
// } from '../types/Card';
// import { CardColor } from "../types/CardColor";
// import { CardSuit } from "../types/CardSuit";
// import { CardValue } from "../types/CardValue";

import { Card, CardValue, CardSuit, CardColor } from '..';

// export interface Card {
//   color: CardColor;
//   suit: CardSuit;
//   value: CardValue;
// }

function getCardValue(rawValue: number): CardValue {
  switch (rawValue) {
    case 1:
      return CardValue.One;
    case 2:
      return CardValue.Two;
    case 3:
      return CardValue.Three;
    case 4:
      return CardValue.Four;
    case 5:
      return CardValue.Five;
    case 6:
      return CardValue.Six;
    case 7:
      return CardValue.Seven;
    case 8:
      return CardValue.Eight;
    case 9:
      return CardValue.Nine;
    case 10:
      return CardValue.Ten;
    case 11:
      return CardValue.Jack;
    case 12:
      return CardValue.Queen;
    case 13:
      return CardValue.King;
    case 14:
      return CardValue.Ace;
    default:
      throw new Error(`Received an invalid value: ${rawValue}`);
  }
}

function getCardSuit(rawSuit: string): CardSuit {
  switch (rawSuit.toUpperCase()) {
    case 'H':
      return CardSuit.Hearts;
    case 'C':
      return CardSuit.Clubs;
    case 'D':
      return CardSuit.Diamonds;
    case 'S':
      return CardSuit.Spades;
    default:
      throw new Error(`Received an invalid suit: ${rawSuit}`);
  }
}

function getCardColor(suite: CardSuit): CardColor {
  switch (suite) {
    case CardSuit.Hearts:
    case CardSuit.Diamonds:
      return CardColor.Red;
    case CardSuit.Clubs:
    case CardSuit.Spades:
      return CardColor.Black;
    default:
      throw new Error(`Received an invalid suit: ${suite}`);
  }
}

export default function getCard(encodedValue: string): Card {
  const rawValue = parseInt(encodedValue.slice(0, -1));
  const rawSuit = encodedValue.slice(-1);

  const value = getCardValue(rawValue);
  const suit = getCardSuit(rawSuit);
  const color = getCardColor(suit);

  return { value, suit, color };
}
