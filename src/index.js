console.log("hello world")
const api= new ApiService("http://localhost:3000")
const modal = new Modal()
// const user= *****

// api.getUsers().then(console.log)



let seconds = document.getElementById("countdown").textContent;
const countDown= setInterval(function() {
  seconds--;
  document.getElementById("countdown").textContent = seconds;
  if (seconds <= 0) clearInterval(countDown);
}, 1000);

// const userLoggedin = () => {
//   document.getElementsByClassName("username")
// }

User.renderLogIn()


