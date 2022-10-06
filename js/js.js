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

    fData.forEach(dilog => {
         dilog.questions.forEach(quees => {
             if(inputMessage.value ===quees){
                let question = quees;
               chatArea.innerHTML+= '<article class="msg-container msg-self" id="msg-0"><div class="msg-box"><div class="flr"><div class="messages"><p class="msg" id="msg-1"></p></div><span class="timestamp"><span class="username">Name</span>&bull;<span class="posttime">Now</span></span></div><img class="user-img" id="user-0" src="//gravatar.com/avatar/56234674574535734573000000000001?d=retro" /></div></article>';
                document.querySelector("#msg-1").innerHTML+= question;


                   ( dilog.answers[Math.floor(Math.random()* dilog.answers.length)]);
                                            }
                        });

});
        

}

} 
}
getBotAnser();