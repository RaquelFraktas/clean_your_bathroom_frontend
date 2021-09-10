console.log("hello world")

const api= new ApiService("http://localhost:3000")
const modal = new Modal()
const gamePlay = new GamePlay()

let currentUser;
let allPoints= 0;

const usernameDisplay =  document.querySelector(".username")
const countdown = document.querySelector("#countdown")
const dirtyItems = document.querySelector(".needs-cleaning")
const toiletGerms = document.querySelector("#toilet-germs")
const tubDirt = document.querySelector("#tub-dirt")
const dirtyLaundry = document.querySelector("#dirty-laundry")
const dirtyMirror = document.getElementById("dirty-mirror")
const dirtPile = document.getElementById("dirt-pile")
const handSplatter1 = document.getElementById("hand-splatter-1")
const handSplatter2 = document.getElementById("hand-splatter-2")




// api.getUsers().then(console.log)



User.renderLogIn()


