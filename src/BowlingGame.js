export class BowlingGame {
  constructor() {
    this.currentScore = 0;
    this.bowlInFrame = 0;
    this.numberOfPinsHitInFrame = 0;
    this.isPreviousFrameSpare = false;
    this.isPreviousFrameStrike = false;
  }

  score() {
    return this.currentScore;
  }

  roll(noOfPins) {
    ++this.bowlInFrame;
    this.numberOfPinsHitInFrame += noOfPins;

    this.currentScore += noOfPins;

    if (this.isScoringASpare() || this.isScoringAStrike()) {
      this.currentScore += noOfPins;
    }

    if (this.isEndOfFrame()) {
      if (this.isCurrentFrameSpare()) {
        this.isPreviousFrameSpare = true;
        this.isPreviousFrameStrike = false;
      } else if (this.isCurrentFrameStrike()) {
        this.isPreviousFrameStrike = true;
        this.isPreviousFrameSpare = false;
      }

      this.bowlInFrame = 0;
      this.numberOfPinsHitInFrame = 0;
    }
  }

  isPreviousFrameASpare() {
    return this.isPreviousFrameSpare;
  }

  isPreviousFrameAStrike() {
    return this.isPreviousFrameStrike;
  }

  isScoringASpare() {
    return this.bowlInFrame === 1 && this.isPreviousFrameASpare();
  }

  isScoringAStrike() {
    return this.isPreviousFrameStrike;
  }

  isCurrentFrameSpare() {
    return this.bowlInFrame === 2 && this.numberOfPinsHitInFrame === 10;
  }

  isCurrentFrameStrike() {
    return this.bowlInFrame === 1 && this.numberOfPinsHitInFrame === 10;
  }

  isEndOfFrame() {
    return this.bowlInFrame === 2 || this.numberOfPinsHitInFrame === 10;
  }
}