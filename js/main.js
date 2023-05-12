const gamepad = navigator.getGamepads()[0];

// Add an event listener to check for button presses/releases
window.addEventListener("gamepadbuttondown", (event) => {
  const buttonIndex = event.detail.index; // get the index of the pressed button
  const buttonValue = gamepad.buttons[buttonIndex].value; // get the current value of the button
  console.log(`Button ${buttonIndex} pressed with value ${buttonValue}`);
});