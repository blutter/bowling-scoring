export class BowlingGame {
  constructor() {
    this.currentScore = 0;
    this.bowlInFrame = 0;
    this.numberOfPinsHitInFrame = 0;
    this.numberOfRemainingRollsForSpareScore = 0;
    this.numberOfRemainingRollsForStrikeScore = 0;
    this.numberOfConsequitiveStrikes = 0;
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

      if (this.isScoringASpare()) {
        --this.numberOfRemainingRollsForSpareScore;
      }
      if (this.isScoringAStrike()) {
        --this.numberOfRemainingRollsForStrikeScore;
      }
    }

    if (this.numberOfConsequitiveStrikes >= 2) {
      this.currentScore += noOfPins;
    }

    if (this.isEndOfFrame()) {
      if (this.isCurrentFrameSpare()) {
        this.numberOfRemainingRollsForSpareScore = 1;
        this.numberOfConsequitiveStrikes = 0;
      } else if (this.isCurrentFrameStrike()) {
        this.numberOfRemainingRollsForStrikeScore += 2;
        ++this.numberOfConsequitiveStrikes;
      } else {
        this.numberOfConsequitiveStrikes = 0;
      }

      this.bowlInFrame = 0;
      this.numberOfPinsHitInFrame = 0;
    } else {
      this.numberOfConsequitiveStrikes = 0;
    }
  }

  isScoringASpare() {
    return this.numberOfRemainingRollsForSpareScore > 0;
  }

  isScoringAStrike() {
    return this.numberOfRemainingRollsForStrikeScore > 0;
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