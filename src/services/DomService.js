class DomService {

  
  constructor(){
    this.gameOver = false
  }


  renderDirtIntoBathroom = () =>{
    arrayOfDirtyItems.forEach(dirt =>{
        dirt[0].style.display= "block"
    })
  }


  static setCountDownDisplay = () => {
    countdown.innerText= 10
  }

  
  addEventListeners = (game) => {
    for(let i = 0; i< arrayOfDirtyItems.length; i++){
      let dirtyItem = arrayOfDirtyItems[i][0]
      dirtyItem.addEventListener("click", ()=>{
        if(gamePlay.user){
          game.addPointsAndRemoveElement(arrayOfDirtyItems[i][1], dirtyItem)
        } 
      })
    } 
  } 


  removeAllChildNodes = (parent) =>{
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
  }

  static darkMode = () => {
    let darkModeBtn = document.createElement("button");
    mainPageButtons.append(darkModeBtn);
    darkModeBtn.innerText = "Teal Mode"
    darkModeBtn.addEventListener("click", ()=> {
      if (document.body.style.backgroundColor == ""){
        document.body.style.backgroundColor = "#52B5B5"
      } else if (document.body.style.backgroundColor != ""){
        document.body.style.backgroundColor = ""
      }
    //could make a light/dark mode class
    })



  }

//can make a ui subolder- dom service can be in ui class
//lightmode/dark mode is a service class
}