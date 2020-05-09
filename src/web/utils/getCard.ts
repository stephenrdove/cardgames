function getCardValue(rawValue: string): CardValue {
  switch (rawValue) {
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
    case '10':
      return rawValue;
    case '11':
      return 'J';
    case '12':
      return 'Q';
    case '13':
      return 'K';
    case '14':
      return 'A';
    default:
      throw new Error(`Received an invalid value: ${rawValue}`);
  }
}

function getCardSuit(rawSuit: string): CardSuit {
  switch (rawSuit.toUpperCase()) {
    case 'H':
      return 'Hearts';
    case 'C':
      return 'Clubs';
    case 'D':
      return 'Diamonds';
    case 'S':
      return 'Spades';
    default:
      throw new Error(`Received an invalid suit: ${rawSuit}`);
  }
}

function getCardSuitSymbol(suit: CardSuit): CardSuitSymbol {
  switch (suit) {
    case 'Hearts':
      return '\u2665';
    case 'Clubs':
      return '\u2663';
    case 'Diamonds':
      return '\u2666';
    case 'Spades':
      return '\u2660';
    default:
      throw new Error(`Received an invalid suit: ${suit}`);
  }
}

function getCardColor(suite: CardSuit): CardColor {
  switch (suite) {
    case 'Hearts':
    case 'Diamonds':
      return 'red';
    case 'Clubs':
    case 'Spades':
      return 'black';
    default:
      throw new Error(`Received an invalid suit: ${suite}`);
  }
}

export default function getCard(encodedValue: string): CardInfo {
  const rawValue = encodedValue.slice(0, -1);
  const rawSuit = encodedValue.slice(-1);

  const value = getCardValue(rawValue);
  const suit = getCardSuit(rawSuit);
  const suitSymbol = getCardSuitSymbol(suit);
  const color = getCardColor(suit);

  return {
    value,
    suit,
    suitSymbol,
    color,
  };
}
