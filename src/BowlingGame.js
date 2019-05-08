export class BowlingGame {
  constructor() {
    this.currentScore = 0;
    this.frameScores = [];

    this.addNewFrame();
  }

  score() {
    return this.currentScore;
  }

  roll(noOfPins) {
    this.addHitPinsToCurrentFrame(noOfPins);

    this.currentScore += noOfPins;
    if (this.isScoringASpare() || this.isScoringAStrike()) {
      this.currentScore += noOfPins;
    }

    if (this.isScoringAfterTwoConsequtiveStrikes()) {
      this.currentScore += noOfPins;
    }

    if (this.isEndOfFrame()) {
      let currentFrame = this.currentFrame();
      if (noOfPins === 10) {
        currentFrame.isStrike = true;
      } else if (currentFrame.pinsHit.reduce((acc, val) => acc + val, 0) === 10) {
        currentFrame.isSpare = true;
      }

      this.addNewFrame();
    }
  }

  addHitPinsToCurrentFrame(noOfPins) {
    let currentFrame = this.currentFrame();
    let pinsHitInFrame = currentFrame.pinsHit;
    pinsHitInFrame.push(noOfPins);
  }

  addNewFrame() {
    this.frameScores.push({
      pinsHit: [],
      isSpare: false,
      isStrike: false
    });
  }

  currentFrame() {
    return this.frameScores.slice(-1)[0];
  }

  previousFrame() {
    let previousFrame = null;
    if (this.frameScores.length > 1) {
      previousFrame = this.frameScores.slice(-2)[0];
    }

    return previousFrame;
  }

  secondLastFrame() {
    let secondLastFrame = null;
    if (this.frameScores.length > 2) {
      secondLastFrame = this.frameScores.slice(-3)[0];
    }

    return secondLastFrame;
  }

  isScoringASpare() {
    let previousFrame = this.previousFrame();
    return previousFrame && previousFrame.isSpare;
  }

  isScoringAStrike() {
    let previousFrame = this.previousFrame();
    return previousFrame && previousFrame.isStrike;
  }

  isScoringAfterTwoConsequtiveStrikes() {
    let isFirstBowlOfFrame = this.currentFrame().pinsHit.length === 1;
    let previousFrame = this.previousFrame();
    let secondLastFrame = this.secondLastFrame();
    return isFirstBowlOfFrame && previousFrame && previousFrame.isStrike && secondLastFrame && secondLastFrame.isStrike;
  }

  isEndOfFrame() {
    let currentFrame = this.currentFrame();
    return currentFrame.pinsHit.length === 2 || 
      currentFrame.pinsHit.reduce((acc, val) => acc + val, 0) === 10;
  }
}