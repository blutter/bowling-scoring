export class BowlingGame {
  constructor() {
    this.currentScore = 0;
  }

  score() {
    return this.currentScore;
  }

  roll(noOfPins) {
    this.currentScore += noOfPins;
  }
}