class GamePlay{

  constructor (){
    this.gameOver = false
    this.allPoints = 0
    this.user;
  }

  beginGame = (user) => {
    this.user= user
    //i assed this in, and passed currentUser as an arg when calling gamePlay.beginGame()
    toiletGerms.addEventListener("click", () =>{
      this.addPointsAndRemoveElement(50, toiletGerms)
    }),
    handSplatter1.addEventListener("click", () =>{
      this.addPointsAndRemoveElement(100, handSplatter1)
    }),
    handSplatter2.addEventListener("click", ()=>{
     this.addPointsAndRemoveElement(100, handSplatter2)
    }), 
    dirtyLaundry.addEventListener("click", ()=>{
      this.addPointsAndRemoveElement(75, dirtyLaundry)
    }), 
    dirtyMirror.addEventListener("dblclick", ()=>{
      this.addPointsAndRemoveElement(50, dirtyMirror)
    }),
    dirtPile.addEventListener("dblclick", ()=>{
      this.addPointsAndRemoveElement(200, dirtPile)
    }),
    tubDirt.addEventListener("dblclick", ()=>{
      this.addPointsAndRemoveElement(125,tubDirt)
    }),
        //have an array of objects, element is x, and it's score is y
    setTimeout( () => { 
      // this.user = currentUser
      this.gameOver = true
      this.addPoints()
      this.gameEnd()
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
  }
  
  gameEnd = () => {
    highScoreRender.listUserScores()
    modal.open()
  }

}
