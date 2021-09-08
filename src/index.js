console.log("hello world")

const api= new ApiService("http://localhost:3000")
const modal = new Modal()
const gamePlay = new GamePlay()

const usernameDisplay =  document.querySelector(".username")

const toiletGerms = document.querySelector("#toilet-germs")
const tubDirt = document.querySelector("#tub-dirt")
const dirtyLaundry = document.querySelector("#dirty-laundry")
const dirtyMirror = document.getElementById("dirty-mirror")
const dirtPile = document.getElementById("dirtPile")
const handSplatter1 = document.getElementById("hand-splatter-1")
const handSplatter2 = document.getElementById("hand-splatter-2")




// api.getUsers().then(console.log)



User.renderLogIn()


