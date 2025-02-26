// to top button
function toTopBtn(){
   let scrollPos = this.scrollY;
   // console.log(scrollPos, screen.height);
   document.getElementById("to-top").style.display = scrollPos>600 ? "block" : "none";
}
window.addEventListener("scroll", (event) => toTopBtn());

window.onload = function(){
   toTopBtn(); checkUser();
   let sihbcanca = location.pathname;
   console.log(sihbcanca);
   
   if(sihbcanca=="/shape.html"){
      snoja();
   }
};

// query parser
var queMap = new Map();
let queArr = location.search.substring(1).split("&");
queArr.forEach(q => {
   let thing = q.split("=");
   queMap.set(thing[0], thing[1]);
});
//console.log(location.search, queMap);

let loginModal = document.getElementById("login-modal");
let accBox = document.getElementById("acc-box");
accBox.onclick = function(event){
   if(event.target == accBox){
      loginModal.classList.add("hidden");
   }
}

function showLogin(){
   document.getElementById("login-modal").classList.remove("hidden");
   document.getElementById("login-box").classList.remove("hidden");
   document.getElementById("register-box").classList.add("hidden");
}

function showRegister(){
   document.getElementById("login-modal").classList.remove("hidden");
   document.getElementById("login-box").classList.add("hidden");
   document.getElementById("register-box").classList.remove("hidden");
}

function checkUser(){
   let test = localStorage.getItem("user");
   if(test!=undefined){ // "logged" in
      document.getElementById("userTxt").innerText = test;
      document.getElementById("login-btn").classList.add("hidden");
      document.getElementById("logout-btn").classList.remove("hidden");
   } else { // "logged" out
      //
   }
}

function login(){
   let user = document.getElementById("user-input").value;
   if(user.length<1){
      alert("Nama tidak boleh kosong.")
      return;
   }
   if(user.length>50){
      alert("Nama terlalu panjang.")
      return;
   }

   localStorage.setItem("user",user);
   reload();
}

function register() {
   alert("Login sukses.");
   showLogin();
}

function logout(){
   localStorage.removeItem("user");
   reload();
}

function reload(){
   window.scroll(0, 0);
   location.reload();
}

function snoja(){
   let shape = queMap.get("shape");
   document.getElementById("detail-box").style.backgroundImage = "url(media/"+shape+"-bg.png)";
   document.getElementById("shape-img").src = "media/"+shape+".png";
   document.getElementById("desc-"+shape).classList.remove("hidden");
}