import { BowlingGame } from '../src/BowlingGame';

describe('Given a BowlingGame', () => {
  let bowlingGame;
  beforeEach(() => {
    bowlingGame = new BowlingGame();
  });
  
  describe('when the game is started', () => {
    test('then the initial score is 0', () => {
      expect(bowlingGame.score()).toBe(0);
    });
  });

  describe('when the player hits 5 pins', () => {
    beforeEach(() => {
      bowlingGame.roll(5);
    });

    test('then the score is 5', () => {
      expect(bowlingGame.score()).toBe(5);
    });

    describe('and then 4 pins', () => {
      beforeEach(() => {
        bowlingGame.roll(4);
      });

      test('then the score is 9', () => {
        expect(bowlingGame.score()).toBe(9);
      });
    });
  });

  describe('when the rolls a 4 and a 6', () => {
    beforeEach(() => {
      bowlingGame.roll(4);
      bowlingGame.roll(6);
    });

    describe('and then in the next bowl hits 5 pins', () => {
      beforeEach(() => {
        bowlingGame.roll(5);
      });

      test('then the score is the sum of the pins knocked down plus the number knocked down in the next bowl', () => {
        expect(bowlingGame.score()).toBe(20);
      });

      describe('and rolls 0', () => {
        beforeEach(() => {
          bowlingGame.roll(0);
        });
  
        test('then the score still 20', () => {
          expect(bowlingGame.score()).toBe(20);
        });
      });
    });
  });

  describe('when the player scores a strike', () => {
    beforeEach(() => {
      bowlingGame.roll(10);
    });

    test('then player has a score of 10', () => {
      expect(bowlingGame.score()).toBe(10);
    });

    describe('and then rolls a 5 and a 4', () => {
      beforeEach(() => {
        bowlingGame.roll(5);
        bowlingGame.roll(4);
      });

      test('then the score is the number of pins knocked down plus the number of pins knocked down in the next two bowls', () => {
        expect(bowlingGame.score()).toBe(28);
      });
    });

    describe('and then rolls a 0 and a 2', () => {
      beforeEach(() => {
        bowlingGame.roll(0);
        bowlingGame.roll(2);
      });

      test('then the score is 10 + 2 + (0 + 2)', () => {
        expect(bowlingGame.score()).toBe(10 + 2 + (0 + 2));
      });

      describe('and then rolls a 5', () => {
        beforeEach(() => {
          bowlingGame.roll(5);
        });
  
        test('then the score is 10 + 2 + 5 + (0 + 2)', () => {
          expect(bowlingGame.score()).toBe(10 + 2 + 5 + (0 + 2));
        });
      });
    });

    describe('and then scores another strike', () => {
      beforeEach(() => {
        bowlingGame.roll(10);
      });

      describe('and then rolls a 2 and a 3', () => {
        beforeEach(() => {
          bowlingGame.roll(2);
          bowlingGame.roll(3);
        });

        test('then player has a score of 10 + 10 + 2 + 3 + (10 + 2) + (2 + 3)', () => {
          expect(bowlingGame.score()).toBe(10 + 10 + 2 + 3 + (10 + 2) + (2 + 3));
        });
      });
    });

    describe('and then scores a spare', () => {
      beforeEach(() => {
        bowlingGame.roll(6);
        bowlingGame.roll(4);
      });

      test('then player has a nominal score 10 + 6 + 4 + (6 + 4)', () => {
        expect(bowlingGame.score()).toBe(10 + 6 + 4 + (6 + 4));
      });

      describe('and then rolls a 3', () => {
        beforeEach(() => {
          bowlingGame.roll(3);
        });

        test('then player has a score of 10 + 6 + 4 + 3 + (6 + 4) + 3', () => {
          expect(bowlingGame.score()).toBe(10 + 6 + 4 + 3 + (6 + 4) + 3);
        });
      });
    });
  });
});

