class GamePlay{
//spacing recommendations?
  constructor (){
    this.gameOver = false
    this.allPoints = 0
    this.user;
  }


  beginGame = (user) => {
    this.user= user
    domService.renderDirtIntoBathroom()
    if (this.user){
      if (!hasEventListenerInitializer){
        domService.addEventListeners(this)
        hasEventListenerInitializer = true
      }
    }
    setTimeout(() => { 
      this.gameOver = true
      this.addPoints()
    }, 10000);
  }


  addPointsAndRemoveElement = (points, element) => {
    if (!this.gameOver){
      this.allPoints += points;
      element.remove()
      document.querySelector("#points").innerHTML= this.allPoints +" points";
    }
  }


  addPoints = () => {
    api.addScore(this)
    .then( response=>
      this.gameEnd(response))
      //why do i need this reponse?
      //why does this work? without it, the newly rendered score wasnt showing up on the user's high scores unless the page refreshed.
  }
  
  gameEnd = () => {
    highScoreRender.renderUserScores()
    arrayOfDirtyItems.forEach(dirt =>{
      dirtyItems.append(dirt[0])
    })
  }


  clear = ()=> {
    this.user = undefined
    this.gameOver = false
    this.allPoints = 0
    domService.renderDirtIntoBathroom()
  }
  
  
}
