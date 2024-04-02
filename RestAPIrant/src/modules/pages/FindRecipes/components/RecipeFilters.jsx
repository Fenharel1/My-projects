import { useEffect, useState } from "react";
import { StarsRate } from "../../../components/StarsRate";
import { Dropdown } from "../../../components/Dropdown";
import { SearchForm } from "../../../layout/components/SearchForm";

const timeOptions2 = ["5 min", "10 min", "20 min", "1 hora", "2 horas"];
const ingredients2 = [
  "Harina",
  "Azúcar",
  "Sal",
  "Pimienta",
  "Aceite de oliva",
  "Mantequilla",
  "Ajo",
  "Cebolla",
  "Limón",
  "Tomate",
  "Leche",
  "Huevo",
  "Queso",
  "Pollo",
  "Carne de res",
  "Pescado",
  "Mariscos",
  "Arroz",
  "Frijoles",
  "Lentejas",
  "Espinacas",
  "Zanahoria",
  "Brócoli",
  "Calabacín",
  "Aguacate",
  "Maíz",
  "Tofu",
  "Salsa de soja",
  "Vinagre",
  "Mostaza"
];

export const RecipeFilters = () => {
  const [starsOptions, setStarsOptions] = useState([]);
  const [timeOptions, setTimeOptions] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [selectedIngredients, setSelectedIngredients] = useState([]);

  const initStarOptions = () => {
    const aux = [];
    for (let i = 5; i > 0; i--) {
      aux.push({
        value: i,
        element: (
          <div className="w-fit text-[#ffa143e6]">
            <StarsRate stars={i} showAll={false}></StarsRate>
          </div>
        ),
      });
    }
    setStarsOptions(aux);
  };

  const initTimeOptions = () => {
    const aux = timeOptions2.map((op) => {
      return { value: op, element: op };
    });
    setTimeOptions(aux);
  };

  const initIngredients = () => {
    setIngredients(ingredients2);
  }

  const handleDrag = (e,ingredient) => {
    e.dataTransfer.setData("ingredient", ingredient);
  }

  const handleDrop = (e) => {
    console.log(e)
    setSelectedIngredients([...selectedIngredients,e.dataTransfer.getData("ingredient")])
  }

  const handleDragOver = (e) => {e.preventDefault()}

  useEffect(() => {
    initStarOptions();
    initTimeOptions();
    initIngredients();
  }, []);

  return (
    <div className="w-full">
      <div className="flex gap-x-4">
        <div>
          <SearchForm placeholder={"Author"}></SearchForm>
        </div>
        <div>
          <Dropdown options={starsOptions} placeholder="Stars"></Dropdown>
        </div>
        <div>
          <Dropdown options={timeOptions} placeholder="Time"></Dropdown>
        </div>
      </div>
      <p className="font-semibold text-2xl mt-7 mb-3">By Ingredients</p>
      <div className="flex mr-12 gap-x-14">
        <div className="w-2/3 flex flex-col gap-y-5">
          <div className="flex justify-between items-center">
            <div className="max-w-[20rem]">
              <SearchForm placeholder={"Ingredient name"}></SearchForm>
            </div>
            <p className="text-lg">5 selected</p>
          </div>
          {/* ingredients */}
          <div className="bg-gray-200 rounded-xl w-full min-h-[10rem] flex gap-x-4 gap-y-3 flex-wrap p-4">
            {ingredients.map((ingr,idx)=>(
              <div draggable onDragStart={e=>{handleDrag(e,ingr)}} key={idx} className="text-black bg-white rounded-md px-3 py-1 h-fit cursor-pointer">{ingr}</div>
            ))}
          </div>
          {/* ingredients selected */}
          <div onDrop={handleDrop} onDragOver={handleDragOver} className="bg-gray-200 rounded-xl w-full min-h-[4rem] flex gap-x-4 gap-y-3 flex-wrap p-4">
            {
              selectedIngredients.map((ingr,idx)=>(
                <div key={idx} className="text-black bg-white rounded-md px-3 py-1 h-fit cursor-pointer">
                  {ingr}
                </div>
              ))
            }
          </div>
        </div>
        <div className="w-1/3">
          <img src="/src/assets/plato.png"/>
        </div>
      </div>
    </div>
  );
};
