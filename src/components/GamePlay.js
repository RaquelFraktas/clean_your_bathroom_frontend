class GamePlay{

  constructor (){
    this.gameOver = false
    this.allPoints = 0
    this.user;
  }

  beginGame = (user) => {
    this.user= user
    domService.addEventListeners(this)
    setTimeout(() => { 
      this.gameOver = true
      this.addPoints()
    }, 10000);
  }


  addPointsAndRemoveElement = (points, element) => {
    if (!this.gameOver){
      this.allPoints += points;
      //allPoints saves instances from the previous user's score. get it out!!
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
  }

  static clear = ()=> GamePlay.all =[]
  
}
