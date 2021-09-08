class GamePlay{

  constructor (){
    this.allPoints = 0
  }

   beginGame = () => {
    return toiletGerms.addEventListener("click", function(){
    this.allPoints + 5;
    GamePlay.addPoints()
    })  
  }  

  static addPoints = () => {
    api.addScore(this.allPoints).then(user => {
    document.querySelector("#points").innerHTML= this.allPoints +" points";
    })
  }

}