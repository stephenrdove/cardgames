type CardLayout = {
  columnMax: number;
  columnCount: number;
  // modulus: number;
};

export default function getCardLayout(value: number): CardLayout {
  if (value / 4 > 2) { // 10, 9
    return {
      columnMax: 4,
      columnCount: 3,
    };
  }
  if (value / 3 >= 2) { // 8, 7, 6
    return {
      columnMax: 3,
      columnCount: value % 3 === 0 ? 2 : 3,
    };
  }
  if (value / 2 >= 2) { // 5, 4
    return {
      columnMax: 2,
      columnCount: value % 2 === 0 ? 2 : 3,
    };
  }

  return { // 3, 2
    columnMax: 3,
    columnCount: 1,
  };
}
