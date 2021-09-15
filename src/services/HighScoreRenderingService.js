class HighScoreRenderingService {

  constructor(user){
      this.user= user
  }

  listUserScores = () =>{
    api.getUserScores(currentUser)
    .then(data => {
     debugger
        data.username
        data.scores.forEach(score => score.points)
    })
  }

}
