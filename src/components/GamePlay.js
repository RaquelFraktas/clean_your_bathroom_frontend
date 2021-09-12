class GamePlay{

  constructor (){
    this.gameOver = false
  }

  beginGame = () => {
    toiletGerms.addEventListener("click", function(){
      GamePlay.addPointsAndRemoveElement(50, toiletGerms)
    }),
    handSplatter1.addEventListener("click", function (){
      GamePlay.addPointsAndRemoveElement(100, handSplatter1)
    }),
    handSplatter2.addEventListener("click", function (){
     GamePlay.addPointsAndRemoveElement(100, handSplatter2)
    }), 
    dirtyLaundry.addEventListener("click", function (){
      GamePlay.addPointsAndRemoveElement(75, dirtyLaundry)
    }), 
    dirtyMirror.addEventListener("dblclick", function (){
      GamePlay.addPointsAndRemoveElement(50, dirtyMirror)
    }),
    dirtPile.addEventListener("dblclick", function (){
      GamePlay.addPointsAndRemoveElement(200, dirtPile)
    }),
    tubDirt.addEventListener("dblclick", function (){
      GamePlay.addPointsAndRemoveElement(125,tubDirt)
    }),
        //have an array of objects, element is x, and it's score is y
    setInterval(function(){ 
      GamePlay.gameOver = true
      GamePlay.gameEnd()
    //   why wont this work?
    }, 10000);
    
  }

  static addPointsAndRemoveElement = (points, element) => {
      //this function would be undefined if it wasnt static, and being called with my event listeners
      //why when i console.log(this.gameOver, it comes out undefined when it should be false in the begining?)
      //calling any ths.constructor function in here comes out undefined. 
      //why cant i use this as a nonclass?

    if (GamePlay.gameOver){
        // console.log(GamePlay.gameOver) isnt working?
    //   this.gameEnd()
      // can try to restart a new instance of this
      //why cant i just call gameEnd()?

    } else {
      allPoints += points;
      element.remove()
      GamePlay.addPoints()
    }
  }


  static addPoints = () => {
    api.addScore(allPoints).then(user => {
      document.querySelector("#points").innerHTML= allPoints +" points";
    })
  }
  
  static gameEnd = () => {
    modal.open()
    modal.modalContent.innerHTML=`<h1>TIME'S UP</h1>`
    // User.renderLogIn()

  }

}

