const startButton = document.getElementById("getStart");

function loginHandler (){
    document.location.replace("/login");
}

startButton.addEventListener("click", loginHandler);