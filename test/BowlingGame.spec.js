import { BowlingGame } from '../src/BowlingGame';

describe('Given a BowlingGame', () => {
  const bowlingGame = new BowlingGame();
  
  describe('when the game is started', () => {
    test('then the initial score is 0', () => {
      expect(bowlingGame.score()).toBe(0);
    });
  });

  describe('when a ball hits 5 pins', () => {
    beforeEach(() => {
      bowlingGame.roll(5);
    });

    test('then the score is 5', () => {
      expect(bowlingGame.score()).toBe(5);
    });
  });
});

