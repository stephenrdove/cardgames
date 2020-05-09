type CardLayout = {
  maxColumnItems: number;
};

export default function getCardLayout(value: number): CardLayout {
  if (value / 4 > 2) { // 10, 9
    return {
      maxColumnItems: 4,
    };
  }
  if (value / 3 >= 2) { // 8, 7, 6
    return {
      maxColumnItems: 3,
    };
  }
  if (value / 2 >= 2) { // 5, 4
    return {
      maxColumnItems: 2,
    };
  }

  return { // 3, 2
    maxColumnItems: 3,
  };
}
