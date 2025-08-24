//applying js to button and footer
function change(){
const element= document.querySelector(".apply");
element.innerHTML="We invite you to the battle of Intellects "

const image= document.querySelector(".images");
image.src="./images/image2.jpg";
}

const button= document.querySelector("#buttonId");
button.addEventListener("click", change);

const foot= document.querySelector("#year");
foot.textContent= new Date().getFullYear();
