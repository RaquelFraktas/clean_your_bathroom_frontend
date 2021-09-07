console.log("hello world")
const api= new ApiService("http://localhost:3000")
const modal = new Modal()
const usernameDisplay =  document.querySelector(".username")
// const user= *****

// api.getUsers().then(console.log)


// if (usernameDisplay.innerText== true){
  let seconds = document.getElementById("countdown").textContent;
  const countDown= setInterval(function() {
    seconds--;
    document.getElementById("countdown").textContent = seconds;
    if (seconds <= 0) clearInterval(countDown);
  }, 1000);
// }



User.renderLogIn()


