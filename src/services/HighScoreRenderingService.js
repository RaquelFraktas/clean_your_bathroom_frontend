class HighScoreRenderingService {

  constructor(user){
      this.user= user
  }

  listUserScores = () =>{
    api.getUserScores(currentUser)
    .then(data => {
        data.username
        data.scores.forEach(score => score.points)
    })
  }
//how do i console log in the third fetch?
}