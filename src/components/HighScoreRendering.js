class HighScoreRendering {

  constructor(user){
      this.user= user
  }


  renderUserScores = () =>{
    api.getUserScores(currentUser)
    .then(data => {
      olistOfScores.classList.add("user-highscores")
        data.scores.forEach(score => {
          let li = document.createElement('li')
           li.innerHTML = score.points
           olistOfScores.appendChild(li)
        })
      modal.open()
      modal.modalContent.innerHTML=`
        <h1>TIME'S UP</h1>
        Your Scores:
        <br> 
        <button type="button" class="close">Close</button>`
        modal.modalContent.appendChild(olistOfScores)
        document.querySelector(".close").addEventListener("click", function (){
        modal.close()
        domService.removeAllChildNodes(document.querySelector(".user-highscores"))
        userClass.resetUser()
        DomService.setCountDownDisplay()
        // location.reload();
        })
      })
    }


  static displayAllTopScores = () => {
    const topScores = document.createElement("button");
    mainPageButtons.append(topScores);
    topScores.innerText = "Click here to view all top scores";
    topScores.addEventListener("click", function(){
      api.getAllTopScores()
      .then(data =>{
        modal.modalContent.innerHTML= "<h1>All Top Scores</h1>"
        const olistOfTopScores = document.createElement("ol")
        data.forEach(score => {
          if (score.points >= 700){
            let li = document.createElement('li')
            li.innerHTML = `${score.user.username} scored ${score.points} points` 
            olistOfTopScores.appendChild(li)
            modal.modalContent.appendChild(olistOfTopScores)
          }
        })
        modal.open()
        modal.modalContent.innerHTML += `
        <button type="button" class="close">Close</button>`
        document.querySelector(".close").addEventListener("click", function (){
          modal.close()
        })
      })
    })
  }


}
