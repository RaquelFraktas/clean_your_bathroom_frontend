class DomService {

  constructor(){
    this.gameOver = false
  }


//   clearDirtInBathroom = ()=>{
//     arrayOfDirtyItems.forEach(dirt =>{
//         dirt[0].remove()
//     })
//   }

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


}