//your JS code here. If required.

// let output = document.getElementById("output");
// let text = document.getElementById("text").value;
// let delay = document.getElementById("delay").value;

// document.getElementById("btn").addEventListner("click", async ()=>{
// 	let p = new Promise((resolve, reject)=>{
// 		setTimeout(()=>{
// 			resolve();
// 		},delay.value)
// 	})
// 	let res = await p;
// 	output innerText = text.value;
	
// })



// Select input fields and button
const textInput = document.getElementById("text");
const delayInput = document.getElementById("delay");
const outputDiv = document.getElementById("output");
const button = document.getElementById("btn");

// Function to introduce a delay using a Promise
function delayMessage(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Async function to handle message display
async function displayMessage() {
  const text = textInput.value.trim();
  const delay = parseInt(delayInput.value, 10);

  // Validate input
  if (!text) {
    outputDiv.innerText = "Please enter a message.";
    return;
  }
  if (isNaN(delay) || delay < 0) {
    outputDiv.innerText = "Please enter a valid delay (0 or more).";
    return;
  }

  // Show waiting message
  outputDiv.innerText = "Waiting...";

  // Wait for the delay
  await delayMessage(delay);

  // Display the message
  outputDiv.innerText = text;
}

// Attach event listener to button
button.addEventListener("click", displayMessage);







