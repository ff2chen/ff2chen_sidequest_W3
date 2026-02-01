function drawRisk() {
  background(255, 100, 100);
  textAlign(CENTER, CENTER);
  textSize(32);
  text("You Took the Risk", width / 2, 200);

  textSize(18);
  text("You move forward without knowing what will happen.", width / 2, 280);
  text("Press ENTER to face the Consequences.", width / 2, 300);
}

function riskKeyPressed() {
  if (keyCode === ENTER) {
    currentScreen = random() < 0.5 ? "win" : "lose";
  }
}

function riskMousePressed() {
  currentScreen = random() < 0.5 ? "win" : "lose";
}
