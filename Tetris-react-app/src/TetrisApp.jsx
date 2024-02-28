import { Board } from "./components/Board"
import ScoreInfo from "./components/ScoreInfo"

export const TetrisApp = () => {
  return (
    <>
      <div className="h-screen w-screen flex items-center justify-center">
        <div className="flex flex-col sm:flex-row flex-nowrap justify-center gap-[1rem]">
          <Board></Board>
          <ScoreInfo></ScoreInfo>
        </div>
      </div>
    </>
  )
}
