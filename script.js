//your JS code here. If required.

let output = document.getElementById("output");
let text = document.getElementById("text").value;
let delay = document.getElementById("delay").value;

document.getElementById("btn").addEventListner("click", async ()=>{
	let p = new Promise((resolve, reject)=>{
		setTimeout(()=>{
			resolve();
		},delay.value)
	})
	let res = await p;
	output innerText = text.value;
	
})






