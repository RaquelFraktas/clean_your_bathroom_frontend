class HighScoreRenderingService {

  constructor(user){
      this.user= user
  }

  listUserScores = () =>{
    
    api.getUserScores(currentUser)
    .then(data => {
        data.username

        let olistOfScores = document.createElement("ol")
        olistOfScores.classList.add("user-highscores")
        let dataOfScores = data.scores.forEach(score => {
          let li = document.createElement('li')
           li.innerHTML = score.points
           olistOfScores.appendChild(li)}

        )

        modal.modalContent.innerHTML=`
        <h1>TIME'S UP</h1>
        Your highscores:
          
        <button type="button" class="close-button">Close</button>`
       
        document.querySelector(".modal-content").appendChild(olistOfScores)
        document.querySelector(".close-button").addEventListener("click", function (){
          location.reload();
          //find another way to reset user and score.
      })
    })
  }

}
