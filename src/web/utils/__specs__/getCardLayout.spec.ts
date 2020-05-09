import getCardLayout from '../getCardLayout';

type CardLayoutTheory = {
  value: number;
  maxColumnItems: number;
  columnCount: number;
};

describe('getCardLayout', () => {
  [
    { value: 10, maxColumnItems: 4 },
    { value: 9, maxColumnItems: 4 },
    { value: 8, maxColumnItems: 3 },
    { value: 7, maxColumnItems: 3 },
    { value: 6, maxColumnItems: 3 },
    { value: 5, maxColumnItems: 2 },
    { value: 4, maxColumnItems: 2 },
    { value: 3, maxColumnItems: 3 },
    { value: 2, maxColumnItems: 3 },
  ].forEach(({ value, maxColumnItems }: CardLayoutTheory) => {
    it(`returns column max of ${maxColumnItems} for value ${value}`, () => {
      const layout = getCardLayout(value);

      expect(layout.maxColumnItems).toBe(maxColumnItems);
    });
  });
});
