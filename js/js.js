let form = document.querySelector("form");
let chatArea = document.querySelector(".chat-window");
let inputMessage =document.querySelector("#message");

async function getBotAnser(){

const response = await fetch("js/mainchat.json");

const fData = await response.json();
form.onsubmit = (e) => {
e.preventDefault();
if (inputMessage.value === "") {
    alert("inter any thing ")
}
else{

    fData.forEach(dilog => {
         dilog.questions.forEach(quees => {
             if(inputMessage.value ===quees){
                let question = quees;
                let answer=( dilog.answers[Math.floor(Math.random()* dilog.answers.length)]);
                var massegTime =Math.floor(Math.random()*10000);
                let d = new Date();
                let h=d.getHours();
                let m=d.getMinutes();
                var usermasseg =' <article class="msg-container msg-self" ><div class="msg-box"><div class="flr"><div class="messages"><p class="msg" >'+question+ '</p></div><span class="timestamp"><span class="posttime">'+h+':'+m+'</span></span> </div><img class="user-img" id="user-0" src="imges/profile.jpg" /></div></article>';
               var botMasseg= '<article class="msg-container msg-remote"><div class="msg-box"><img class="user-img"  src="imges/icon.jpg" /><div class="flr"><div class="messages"><p class="msg" >'+ answer +'</p></div><span class="timestamp"> <span class="posttime">'+h+':'+(m+1)+'</span></span> </div></div></article>';
               chatArea.innerHTML+=usermasseg;

            
               setTimeout(()=>{ chatArea.innerHTML+= botMasseg;},massegTime);
            }
                        });

});
  inputMessage.value =""
   

}

} 
}
getBotAnser();