class GamePlay{

  constructor (){
    this.allPoints = 0
  }

  beginGame = (e) => {
   toiletGerms.addEventListener("click", function(e){
       console.log(e)
       this.allPoints += 5
       addPoints()
    //    usernameDisplay
   })  
  }  

   addPoints = () => {
    app.addScore(this.allPoints).then(user => {
    document.querySelector("#points").innerHTML= this.allPoints +" points";
    })
  }

}