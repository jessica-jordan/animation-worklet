registerAnimator('animatedscroll', class {
  animate(currentTime, effect) {
    effect.localTime = currentTime;
  }
});
