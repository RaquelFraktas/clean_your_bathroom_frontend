//creates a user variable to store data in to pass through to APIs
let currentUser;
let hasEventListenerInitializer= false

//variable names for new class initializations
const api= new ApiService("http://localhost:3000")
const modal = new Modal()
const gamePlay = new GamePlay()
const highScoreRender = new HighScoreRendering()
const domService = new DomService()
const userClass = new User()

//dom variable declaraions
const wrapper = document.querySelector("#wrapper")
const olistOfScores = document.createElement("ol")
const mainPageButtons = document.querySelector("#buttons-for-main")

const usernameDisplay =  document.querySelector(".username")
const countdown = document.querySelector("#countdown")

//list of dirty items
const dirtyItems = document.querySelector(".needs-cleaning")
const toiletGerms = document.querySelector("#toilet-germs")
const tubDirt = document.querySelector("#tub-dirt")
const dirtyLaundry = document.querySelector("#dirty-laundry")
const dirtyMirror = document.getElementById("dirty-mirror")
const dirtPile = document.getElementById("dirt-pile")
const handSplatter1 = document.getElementById("hand-splatter-1")
const handSplatter2 = document.getElementById("hand-splatter-2")

const arrayOfDirtyItems = [[toiletGerms, 50], [tubDirt, 125], [dirtyLaundry, 75], [dirtyMirror, 50], [dirtPile, 200],  [handSplatter1, 100], [handSplatter2, 100]]


//begin the game + render high score on page
User.renderLogIn()
HighScoreRendering.displayAllTopScores()
DomService.setCountDownDisplay()
DomService.darkMode()


