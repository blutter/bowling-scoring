export class BowlingGame {
  constructor() {
    this.currentScore = 0;
    this.bowlInFrame = 0;
    this.numberOfPinsHitInFrame = 0;
    this.isPreviousFrameSpare = false;
  }

  score() {
    return this.currentScore;
  }

  roll(noOfPins) {
    ++this.bowlInFrame;
    this.numberOfPinsHitInFrame += noOfPins;

    this.currentScore += noOfPins;

    if (this.isScoringASpare()) {
      this.currentScore += noOfPins;
    }

    if (this.isEndOfFrame()) {
      if (this.isCurrentFrameSpare()) {
        this.isPreviousFrameSpare = true;
      }
      this.bowlInFrame = 0;
      this.numberOfPinsHitInFrame = 0;
    }
  }

  isPreviousFrameASpare() {
    return this.isPreviousFrameSpare;
  }

  isScoringASpare() {
    return this.bowlInFrame === 1 && this.isPreviousFrameASpare();
  }

  isCurrentFrameSpare() {
    return this.bowlInFrame === 2 && this.numberOfPinsHitInFrame === 10;
  }

  isEndOfFrame() {
    return this.bowlInFrame === 2 || this.numberOfPinsHitInFrame === 10;
  }
}