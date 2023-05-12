// Add an event listener to check for button presses/releases
window.addEventListener("gamepadconnected", (event) => {
    console.log("Gamepad connected!");
    const gamepad = event.gamepad;
  
    // Add event listeners for button presses/releases
    window.addEventListener("gamepadbuttondown", (event) => {
      const buttonIndex = event.detail.index; // get the index of the pressed button
      const buttonValue = gamepad.buttons[buttonIndex].value; // get the current value of the button
      console.log(`Button ${buttonIndex} pressed with value ${buttonValue}`);
    });
  
    window.addEventListener("gamepadbuttonup", (event) => {
      const buttonIndex = event.detail.index; // get the index of the released button
      const buttonValue = gamepad.buttons[buttonIndex].value; // get the current value of the button
      console.log(`Button ${buttonIndex} released with value ${buttonValue}`);
    });
  });
  
  // Add an event listener to check for disconnection of gamepad
  window.addEventListener("gamepaddisconnected", (event) => {
    console.log("Gamepad disconnected");
  });
  