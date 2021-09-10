class GamePlay{

//   constructor (points){
//     this.allPoints = points
//   }

  beginGame = () => {
    toiletGerms.addEventListener("click", function(){
      allPoints += 50;
      toiletGerms.remove()
    })  
    handSplatter1.addEventListener("click", function(){
      allPoints += 100;
      handSplatter1.remove()
    }) 
    handSplatter2.addEventListener("click", function(){
        allPoints += 100;
        handSplatter2.remove()
    }) 
    dirtyLaundry.addEventListener("click", function(){
        allPoints += 75;
        dirtyLaundry.remove()
    }) 
    dirtyMirror.addEventListener("dblclick", function(){
        allPoints += 50;
        dirtyMirror.remove()
    }) 
    dirtPile.addEventListener("dblclick", function(){
        allPoints += 200;
        dirtyItems.removeChild(dirtPile)
        // dirtPile.remove()
    }) 
    tubDirt.addEventListener("dblclick", function(){
        allPoints += 125;
        tubDirt.remove()
    }) 

    for (let i= 0; i < dirtyItems.childElementCount; i++){
      if (dirtyItems.childElementCount === 0) {
      GamePlay.addPoints()
      }
    }
  }

    

  static addPoints = () => {
    api.addScore(allPoints).then(user => {
    document.querySelector("#points").innerHTML= this.allPoints +" points";
    })
  }

}