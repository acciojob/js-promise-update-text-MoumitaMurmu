//your JS code here. If required.

function delayedMessage() {
  return new Promise((resolve) => {
    // Simulate an asynchronous operation with setTimeout
    setTimeout(() => {
      resolve('Hello, world!');
    }, 1000);
  });
}

// Get the HTML element with id 'output'
const outputElement = document.getElementById('output');

// Call the function and update the text when the promise resolves
delayedMessage().then((message) => {
  outputElement.textContent = message;
});
