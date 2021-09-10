class GamePlay{

//   constructor (points){
//     this.allPoints = points
//   }

  beginGame = () => {
    toiletGerms.addEventListener("click", function(){
      allPoints += 50;
      toiletGerms.remove()
      GamePlay.addPoints()
    })  
    handSplatter1.addEventListener("click", function(){
      allPoints += 100;
      handSplatter1.remove()
      GamePlay.addPoints()
    }) 
    handSplatter2.addEventListener("click", function(){
        allPoints += 100;
        handSplatter2.remove()
    }) 
    dirtyLaundry.addEventListener("click", function(){
        allPoints += 75;
        dirtyLaundry.remove()
        GamePlay.addPoints()
    }) 
    dirtyMirror.addEventListener("dblclick", function(){
        allPoints += 50;
        dirtyMirror.remove()
        GamePlay.addPoints()
    }) 
    dirtPile.addEventListener("dblclick", function(){
        allPoints += 200;
        dirtyItems.removeChild(dirtPile)
        // dirtPile.remove()
        GamePlay.addPoints()
    }) 
    tubDirt.addEventListener("dblclick", function(){
        allPoints += 125;
        tubDirt.remove()
        GamePlay.addPoints()
    }) 

    setInterval(function(){ 
      GamePlay.addPoints()

    }, 10000);
    
  }


  timesUp = () =>{
    const dirtyItemsChildren = dirtyItems.children
    const dirtyItemsChildrenArray = [...dirtyItemsChildren]

  }

  static addPoints = () => {
    api.addScore(allPoints).then(user => {
      
      document.querySelector("#points").innerHTML= allPoints +" points";
    })
  }


  //   static gameOver = () => {
//     dirtyItems.setAttribute("onchange", gameOver)
//     for (let i= 0; i < dirtyItems.childElementCount; i++){
//         if (dirtyItems.childElementCount === 0) {
//           GamePlay.addPoints()
//         }
//       }
//   }

}