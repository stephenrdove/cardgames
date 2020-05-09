import getCardLayout from '../getCardLayout';

type CardLayoutTheory = {
  value: number;
  columnMax: number;
  columnCount: number;
};

describe('getCardLayout', () => {
  [
    { value: 10, columnMax: 4, columnCount: 3 },
    { value: 9, columnMax: 4, columnCount: 3 },
    { value: 8, columnMax: 3, columnCount: 3 },
    { value: 7, columnMax: 3, columnCount: 3 },
    { value: 6, columnMax: 3, columnCount: 2 },
    { value: 5, columnMax: 2, columnCount: 3 },
    { value: 4, columnMax: 2, columnCount: 2 },
    { value: 3, columnMax: 3, columnCount: 1 },
    { value: 2, columnMax: 3, columnCount: 1 },
  ].forEach(({ value, columnMax, columnCount }: CardLayoutTheory) => {
    it(`returns column max of ${columnMax} for value ${value}`, () => {
      const layout = getCardLayout(value);

      expect(layout.columnMax).toBe(columnMax);
      expect(layout.columnCount).toBe(columnCount);
    });
  });
});
