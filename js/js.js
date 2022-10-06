let form = document.querySelector("form");
let chatArea = document.querySelector(".chat-window");
let inputMessage =document.querySelector("#message");

async function getBotAnser(){

const response = await fetch("js/mainchat.json");

const fData = await response.json();
form.onsubmit = (e) => {
e.preventDefault();
if (inputMessage.value === "") {
    alert("اكتب حاجه يا ميتين")
}
else{
if(inputMessage.value ===fData.answers)
alert(" يا زول ظط")
}

}

} 

getBotAnser();