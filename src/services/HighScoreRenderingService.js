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
        let li = document.createElement('li')
        olistOfScores.appendChild(li)
        let dataOfScores = data.scores.forEach(score => {
          li.innerHTML = score.points
          //for const of blah blah 
        })
        //can create another .then to add the modal inner html asynchronously
        modal.modalContent.innerHTML=`
        <h1>TIME'S UP</h1>
        Your highscores:
          ${dataOfScores}
        <button type="button" class="close-button">Close</button>`
    })
  }

}
