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
        // add conditional to see if game is over, then increment the points
        //have an array of objects, element is x, and it's score is y
        //write a conditional function that takes in a number of points, and adds a number of points if the game is still running
    setInterval(function(){ 
      this.gameOver = true
      GamePlay.timesUp()
    }, 10000);
    
  }

  static addPointsAndRemoveElement = (points, element) => {
    allPoints += points;
    element.remove()
    if (!this.gameOver){
      GamePlay.addPoints()
    } else{
      GamePlay.gameOver()
    }
  }

  static timesUp = () =>{
    const dirtyItemsChildren = dirtyItems.children
    const dirtyItemsChildrenArray = [...dirtyItemsChildren]
    console.log(dirtyItemsChildrenArray)
    dirtyItemsChildrenArray.forEach((item) => {
        item.removeEventListener("click",addPointsAndRemoveElement, true)
        item.removeEventListener("dblclick",addPointsAndRemoveElement, true)
    })
  }

  static addPoints = () => {
    api.addScore(allPoints).then(user => {
      document.querySelector("#points").innerHTML= allPoints +" points";
    })
  }
  
  gameOver = () => {
      wrapper.innerHTML = "game over"
    
      }

}

