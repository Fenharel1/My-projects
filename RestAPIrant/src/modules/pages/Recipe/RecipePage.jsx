import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { getRecipeById } from "../../../services/recipesService";
import { SlUserFollow } from "react-icons/sl";
import { SlUserFollowing } from "react-icons/sl";
import { StarsRate } from "../../components/StarsRate";

const ProgressBar = ({ value, h = "1rem", w = "full", bg, fg, r = "7px" }) => {
  return (
    <div style={{ borderRadius: r, width: w, height: h, background: bg }}>
      <div
        style={{
          borderRadius: r,
          height: h,
          background: fg,
          width: Math.min(100, value) + "%",
        }}
      ></div>
    </div>
  );
};

export const RecipePage = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const imgSectionRef = useRef(null);

  useEffect(() => {
    setRecipe(getRecipeById());
    handleResize();
  }, []);

  useEffect(() => {
    if (imgSectionRef.current) {
      const sectionWidth = imgSectionRef.current.offsetWidth;
      const imgWidth = imgSectionRef.current.querySelector("img").offsetWidth;
    }
  });

  const handleResize = () => {
    if (imgSectionRef.current) {
      const sectionWidth = imgSectionRef.current.offsetWidth;
      const imgWidth = imgSectionRef.current.querySelector("img").offsetWidth;
      if (imgWidth >= sectionWidth)
        imgSectionRef.current
          .querySelector("#stats-data")
          .classList.add(
            "flex",
            "w-full",
            "gap-5",
            "flex-row",
            "flex-wrap",
            "!space-y-0"
          );
      if (imgWidth < sectionWidth)
        imgSectionRef.current
          .querySelector("#stats-data")
          .classList.remove(
            "flex",
            "w-full",
            "gap-5",
            "flex-row",
            "flex-wrap",
            "!space-y-0"
          );
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    // Remover el controlador de eventos cuando el componente se desmonte
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex items-start justify-center p-[20px] max-h-[95%] overflow-auto">
      <div className="max-w-[90vw] w-full space-y-5 py-10 px-5 md:px-20 border shadow-[20px_20px_2px_rgba(0,0,0,0.2),-20px_-20px_2px_rgba(172,172,172,0.16)]">
        {/* header */}
        <div className="flex justify-between flex-wrap gap-y-3">
          <div className="flex justify-between items-center gap-x-5">
            <img
              className="w-[8rem] h-[8rem] object-cover rounded-full shadow-[-10px_-10px_2px_rgba(255,97,47,0.16),10px_10px_2px_rgba(0,0,0,0.2)]"
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <div className="flex flex-col items-start justify-center font-light ">
              <p>
                <span className="font-semibold">By: </span>Julieta Venegas, La
                mas cocinera
              </p>
              <p>
                <span className="font-semibold">Actualizado: </span>
                25 feb 2024
              </p>
              <div className="flex gap-x-2 items-center justify-start [&>button]:rounded-[5px] mt-3 font-medium">
                <button className="bg-[#FFD8B3] hover:bg-[#FFE0C3] text-black px-8 py-1 flex gap-x-2 items-center">
                  {" "}
                  <SlUserFollow></SlUserFollow> Follow{" "}
                </button>
                <button className="bg-[#B6B0FF] text-white px-8 py-1 flex gap-x-2 items-center">
                  {" "}
                  <SlUserFollowing></SlUserFollowing> Visit{" "}
                </button>
              </div>
            </div>
          </div>
          <div className="font-bold text-6xl self-end text-end flex-1 min-w-[40rem]">
            {recipe?.name}
          </div>
        </div>
        <div className="h-1 w-full bg-[#D9D9D9] my-10"></div>
        {/* img and stats */}
        <div
          ref={imgSectionRef}
          className="flex flex-wrap items-start justify-center gap-5 "
          style={{ containerType: "normal" }}
        >
          <img
            src="https://www.gastrolabweb.com/u/fotografias/m/2020/7/24/f1280x720-2014_133689_5050.jpg"
            className="!min-w-[60ch] flex-1 max-w-[60rem]"
            alt=""
          />
          <div id="stats-data" className="space-y-5 min-w-[20rem]">
            <div className="border border-[#D6D6D6] p-4 min-w-[20rem] flex-1">
              <p className="font-bold text-xl">General data</p>
              <table className="[&>tbody>tr>td:first-child]:font-semibold [&>tbody>tr>td:first-child]:pr-4">
                <tbody>
                  <tr>
                    <td>Tiempo:</td>
                    <td>30 min</td>
                  </tr>
                  <tr>
                    <td>Porciones:</td>
                    <td>4 personas</td>
                  </tr>
                  <tr>
                    <td>Tipo:</td>
                    <td>Plato principal, entrada</td>
                  </tr>
                  <tr>
                    <td>Sabores:</td>
                    <td>Salado, acido</td>
                  </tr>
                  <tr>
                    <td>Calificacion:</td>
                    <td>
                      <div className="max-w-[8rem] text-[#FFB800]">
                        <StarsRate size={20} stars={3}></StarsRate>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="border border-[#D6D6D6] p-4 min-w-[20rem] flex-1">
              <p className="font-bold text-xl">Statistics</p>
              <table>
                <tbody className="[&>tr>td]:pr-4 [&>tr>td:nth-child(2)]:w-full [&>tr>td:nth-child(3)]:pr-0">
                  <tr>
                    <td>Muy bueno</td>
                    <td>
                      <ProgressBar
                        fg="#89E3CE"
                        bg="#E5E5E5"
                        r="7px"
                        w="100%"
                        value={55}
                        h="0.75rem"
                      ></ProgressBar>{" "}
                    </td>
                    <td>117</td>
                  </tr>
                  <tr>
                    <td>Bueno</td>
                    <td>
                      <ProgressBar
                        fg="#89E3CE"
                        bg="#E5E5E5"
                        r="7px"
                        w="100%"
                        value={25}
                        h="0.75rem"
                      ></ProgressBar>{" "}
                    </td>
                    <td>117</td>
                  </tr>
                  <tr>
                    <td>Regular</td>
                    <td>
                      <ProgressBar
                        fg="#89E3CE"
                        bg="#E5E5E5"
                        r="7px"
                        w="100%"
                        value={7}
                        h="0.75rem"
                      ></ProgressBar>{" "}
                    </td>
                    <td>117</td>
                  </tr>
                  <tr>
                    <td>Malo</td>
                    <td>
                      <ProgressBar
                        fg="#89E3CE"
                        bg="#E5E5E5"
                        r="7px"
                        w="100%"
                        value={3}
                        h="0.75rem"
                      ></ProgressBar>{" "}
                    </td>
                    <td>117</td>
                  </tr>
                  <tr>
                    <td>Muy malo</td>
                    <td>
                      <ProgressBar
                        fg="#89E3CE"
                        bg="#E5E5E5"
                        r="7px"
                        w="100%"
                        value={10}
                        h="0.75rem"
                      ></ProgressBar>{" "}
                    </td>
                    <td>117</td>
                  </tr>
                  <tr>
                    <td>Comentarios</td>
                    <td colSpan={2}>16</td>
                  </tr>
                </tbody>
              </table>
              <p className="font-bold text-3xl text-end mt-3">1104 Vistas</p>
            </div>
          </div>
        </div>
        {/* introduction */}
        <div className="font-extralight text-xl">
          <p>{recipe?.introduction}</p>
        </div>
        {/* ingredients and utensils */}
        <div className="flex flex-wrap items-start justify-center gap-5">
          <div className="text-xl min-w-[20rem] flex-1 border-[1px] border-[#D6D6D6] py-4 px-6">
            <p className="font-bold mb-5 text-2xl">Ingredients</p>
            <div className="grid grid-cols-3 font-extralight">
              {recipe?.ingredients.map((ingr, idx) => {
                return <p key={idx}>. {ingr}</p>;
              })}
            </div>
          </div>
          <div className="text-xl min-w-[20rem] flex-1 border-[1px] border-[#D6D6D6] py-4 px-6">
            <p className="font-bold mb-5 text-2xl">Utensils</p>
            <div className="font-extralight">
              <p>. Olla</p>
              <p>. Tenedor</p>
              <p>. Cuchara</p>
              <p>. Rastrillo</p>
            </div>
          </div>
        </div>
        {/* instructions */}
        <div className="overflow-y-hidden">
          <p className="font-bold text-2xl">Instructions</p>
          <div className="space-y-8 mt-5 relative [&>]">
            {recipe?.instructions.map((instruction, idx) => {
              return (
                <div key={idx} className="flex flex-row flex-nowrap gap-x-10">
                  <div
                    className="rounded-full text-xl z-10 font-bold bg-[#FED8B9] w-12 h-12 flex items-center justify-center outline-[4px] outline-white outline "
                    style={{ border: "0px solid #E6ACF2", borderWidth: "0px 0px 0.75rem 0px" }}
                  >
                    {idx + 1}
                  </div>
                  <div className="font-extralight text-xl flex-1">
                    {instruction}
                  </div>
                </div>
              );
            })}
            <div className="absolute h-full w-1 top-0 left-[22px] bg-[#F1F1F1]"></div>
          </div>
        </div>
        {/* despedida */}
        <div className="font-extralight text-xl">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        {/* your opinion */}
        <div className="h-1 w-full bg-[#D9D9D9] my-10"></div>
        <div>
          <p className="font-bold text-2xl text-center">Tell us your opinion!</p>
        </div>
        <div className="h-1 w-full bg-[#D9D9D9] my-10"></div>
        {/* comments */}
        {/* wanna see more ? */}
      </div>
    </div>
  );
};
