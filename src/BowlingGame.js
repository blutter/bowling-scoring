export class BowlingGame {
  constructor() {
    this.currentScore = 0;
    this.bowlInFrame = 0;
    this.numberOfPinsHitInFrame = 0;
    this.numberOfRemainingRollsForSpareScore = 0;
    this.isPreviousFrameStrike = 0;
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
      --this.numberOfRemainingRollsForSpareScore;
    }

    if (this.isEndOfFrame()) {
      if (this.isCurrentFrameSpare()) {
        this.numberOfRemainingRollsForSpareScore = 1;
        this.isPreviousFrameStrike = false;
      } else if (this.isCurrentFrameStrike()) {
        this.isPreviousFrameStrike = true;
      }

      this.bowlInFrame = 0;
      this.numberOfPinsHitInFrame = 0;
    }
  }

  isPreviousFrameAStrike() {
    return this.isPreviousFrameStrike;
  }

  isScoringASpare() {
    return this.numberOfRemainingRollsForSpareScore > 0;
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