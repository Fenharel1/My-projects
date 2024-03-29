import { StarsRate } from "../../../components/StarsRate"

export const RecipeComment = ({comment}) => {
  // get initial
  return (
    <div className="flex flex-row gap-x-5 items-center">
      <img src={comment.author.img} alt="" className="w-[5rem] h-[5rem] object-cover rounded-full shadow-[-7px_-7px_2px_rgba(0,0,0,0.16),7px_7px_2px_rgba(0,0,0,0.2)]" />
      <div className="">
        <div className="font-semibold text-lg"> {comment.author.name} <div className="font-extralight text-sm inline-block ml-2">{comment.date}</div> </div>
        <div className="w-full flex gap-x-3">
          <div className=" text-[#FFB800]">
            <StarsRate size="1.2rem" stars={comment.stars}></StarsRate>
          </div>
          <div className="inline-block ml-4 font-regular text-[#5FAA53] text-sm">Preparo la receta</div>
        </div>
        <div className="mt-3">
          {comment.comment}
        </div>
      </div>
    </div>
  )
}
