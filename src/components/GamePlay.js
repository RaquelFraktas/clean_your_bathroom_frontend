class GamePlay{

  constructor (){
    this.gameOver = false
    this.allPoints = 0
    this.user;
  }

  beginGame = () => {
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
      this.user = currentUser
      //why cant i save this.user = currentUser in constructor?
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
    modal.open()
    modal.modalContent.innerHTML=`
    <h1>TIME'S UP</h1>
    Your highscores:
      ${highScoreRender.listUserScores()}
 
    <button type="button" class="close-button">Close</button>
    `
      // this.highScoreRender.listUserScores(currentUser)
    //why cant i call it without `this`?

    document.querySelector(".close-button").addEventListener("click", function (){
        location.reload();
    })

  }

}

//components relate to something you show on the page