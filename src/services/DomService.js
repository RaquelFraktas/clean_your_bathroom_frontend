class DomService {

  constructor(){
    this.gameOver = false
  }


  renderDirtIntoBathroom = () =>{
    arrayOfDirtyItems.forEach(dirt =>{
        dirtyItems.appendChild(dirt[0]) 
    })
    // for(let i = 0; i< arrayOfDirtyItems; i++){
    //   dirtyItems.appendChild(arrayOfDirtyItems[i][0])
    // } why wont this work?
    // this.addEventListeners()
  }

  static setCountDownDisplay = () => {
    countdown.innerText= 10
  }

  addEventListeners = (game) => {
    for(let i = 0; i< arrayOfDirtyItems.length; i++){
      let dirtyItem = arrayOfDirtyItems[i][0]
      dirtyItem.addEventListener("click", ()=>{
        game.addPointsAndRemoveElement(arrayOfDirtyItems[i][1], dirtyItem)
      })
    } 
  }


}