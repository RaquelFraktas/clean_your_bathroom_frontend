class GamePlay{

  constructor (){
    this.gameOver = false
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
      this.gameOver = true
      this.addPoints()
      this.gameEnd()
    }, 10000);
  }

  addPointsAndRemoveElement = (points, element) => {
    if (!this.gameOver){
      allPoints += points;
      element.remove()
      document.querySelector("#points").innerHTML= allPoints +" points";
    }
  }

  
   addPoints = () => {
    api.addScore(allPoints).then(scoreSubmittal => {
        console.log(scoreSubmittal)
        //what do i do here?

    })
  }
  
  gameEnd = () => {
    modal.open()
    modal.modalContent.innerHTML=`
    <h1>TIME'S UP</h1>
    Your highscores:
  

    <button type="button" class="close-button">Close</button>
    `
      // this.highScoreRender.listUserScores(currentUser)
    //why cant i call it without `this`?

    document.querySelector(".close-button").addEventListener("click", function (){
        location.reload();
        // currentUser = undefined;
    })

  }

}

//components relate to something you show on the page