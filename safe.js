function drawSafe() {
  background(210, 240, 220);

  fill(0);
  textAlign(CENTER, CENTER);

  textSize(32);
  text("You Played It Safe", width / 2, 220);

  textSize(18);
  text(
    "It took longer, but you avoided danger. Click or press ENTER to continue",
    width / 2,
    300,
  );
}

function safeMousePressed() {
  currentScreen = "win";
}

function safeKeyPressed() {
  if (keyCode === ENTER) {
    currentScreen = "win";
  }
}
