class HighScoreRenderingService {

  constructor(user){
      this.user= user
  }

  renderUserScores = () =>{
    api.getUserScores(currentUser)
    .then(data => {
      let olistOfScores = document.createElement("ol")
      olistOfScores.classList.add("user-highscores")
        data.scores.forEach(score => {
          let li = document.createElement('li')
           li.innerHTML = score.points
           olistOfScores.appendChild(li)}
        )

      
      modal.open()
      modal.modalContent.innerHTML=`
          <h1>TIME'S UP</h1>
          Your highscores:
            
          <button type="button" class="close">Close</button>`
          modal.modalContent.appendChild(olistOfScores)
          document.querySelector(".close").addEventListener("click", function (){
          modal.close()
          location.reload();
          })
        })
    }
    
          // document.querySelector("#wrapper").location.reload();
        // usernameDisplay.innerText= "Log in to play!";
        // gamePlay
        // document.querySelector("#points").innerHTML= 0
        //make a function that runs all my dirty image elements

  
}
