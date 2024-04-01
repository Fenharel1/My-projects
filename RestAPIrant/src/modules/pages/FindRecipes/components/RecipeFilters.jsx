import { useEffect, useState } from "react";
import { StarsRate } from "../../../components/StarsRate";

export const RecipeFilters = () => {
  const [starsOptions, setStarsOptions] = useState([]);

  useEffect(() => {
    const aux = [];
    for (let i = 5; i > 0; i--) {
      aux.push({
        stars: i,
        element: (
          <div className="w-[3rem] text-[#FFE03C]">
            <StarsRate stars={i}></StarsRate>
          </div>
        ),
      });
    }
    setStarsOptions(aux);
  }, []);

  return (
    <div className="flex gap-x-4">
      <div>
        <button></button>
        <input type="text" placeholder="Autor" />
      </div>
      <div>
<div className="absolute top-0 left-0 bottom-0 right-0">Aqui no hay nada</div>
        <select placeholder="Stars" className="relative">
          
          {starsOptions.map((se, idx) => {
            return (
              <option className="font-[Inter]" key={idx} value={se.stars}>
                {se.stars} stars
              </option>
            );
          })}
        </select>
      </div>
      <div>
        <select name="" id="">
          <option value="5 min">4 min</option>
        </select>
      </div>
    </div>
  );
};
