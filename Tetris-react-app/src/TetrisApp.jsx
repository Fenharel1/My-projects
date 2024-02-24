import { Board } from "./components/Board"
import ScoreInfo from "./components/ScoreInfo"

export const TetrisApp = () => {
  return (
    <>
      <div className="h-screen w-screen flex items-center justify-center bg-red-300 md:bg-blue-400">
        <div className="flex flex-col md:flex-row flex-nowrap justify-center gap-[1rem]">
          <Board></Board>
          <ScoreInfo></ScoreInfo>
        </div>
      </div>
    </>
  )
}
