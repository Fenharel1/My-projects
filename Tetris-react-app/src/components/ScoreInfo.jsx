import { useState } from "react"

const initScore = {
  username: "Reinhard",
  score: 123,
  maxScore: 12300
}

const ScoreInfo = () => {

  const [scoreInfo, setScoreInfo] = useState(initScore)

  const {username, score, maxScore} = scoreInfo;

  const scoreDetailClass = "flex flex-row sm:flex-col gap-x-3";

  return (
    <>
      <div>
        <div className={scoreDetailClass}>
          <p>Username</p>
          <p>{username}</p>
        </div>
        <div className={scoreDetailClass}>
          <p>Your Score</p>
          <p>{score}</p>
        </div>
        <div className={scoreDetailClass}>
          <p>Your max Score</p>
          <p>{maxScore}</p>
        </div>
      </div>
    </>
  )
}

export default ScoreInfo