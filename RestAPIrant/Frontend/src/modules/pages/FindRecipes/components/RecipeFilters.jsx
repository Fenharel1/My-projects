import { useEffect, useState } from "react";
import { StarsRate } from "../../../components/StarsRate";
import { Dropdown } from "../../../components/Dropdown";
import { SearchForm } from "../../../layout/components/SearchForm";
import { IoClose } from "react-icons/io5";

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
  "Mostaza",
];

const ChipIngredient = ({ text = "", color = "", remove = false }) => {
  return <div></div>;
};

export const RecipeFilters = ({ onFiltersChange }) => {
  const [starsOptions, setStarsOptions] = useState([]);
  const [timeOptions, setTimeOptions] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [searchIngredient, setSearchIngredient] = useState("");

  const [time, setTime] = useState(null);
  const [stars, setStars] = useState(null);
  const [author, setAuthor] = useState(null);

  const filters = {
    author,
    stars,
    time,
    selectedIngredients,
  };

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
  };

  const handleDrag = (e, ingredient) => {
    e.dataTransfer.setData("ingredient", ingredient);
  };

  const handleDrop = (e) => {
    const ingredientDrop = e.dataTransfer.getData("ingredient");
    if (!ingredientDrop) return;
    setSelectedIngredients([...selectedIngredients, ingredientDrop]);
    setIngredients(ingredients.filter((ing) => ing != ingredientDrop));
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const removeIngredient = (name) => {
    setIngredients([name, ...ingredients]);
    setSelectedIngredients(selectedIngredients.filter((ing) => ing != name));
  };

  useEffect(() => {
    initStarOptions();
    initTimeOptions();
    initIngredients();
  }, []);

  useEffect(() => {
    onFiltersChange(filters);
  }, [filters]);

  useEffect(() => {
    console.log(searchIngredient);
    if (searchIngredient)
      setIngredients(
        ingredients2.filter((ing) =>
          ing.toLowerCase().includes(searchIngredient.toLowerCase())
        )
      );
    else
      setIngredients(
        ingredients2.filter((ing) => !selectedIngredients.includes(ing))
      );
  }, [searchIngredient]);

  return (
    <div className="w-full">
      <div className="flex gap-x-4">
        <div>
          <SearchForm onSearch={setAuthor} placeholder={"Author"}></SearchForm>
        </div>
        <div>
          <Dropdown
            options={starsOptions}
            onChange={setStars}
            placeholder="Stars"
          ></Dropdown>
        </div>
        <div>
          <Dropdown
            options={timeOptions}
            onChange={setTime}
            placeholder="Time"
          ></Dropdown>
        </div>
      </div>
      <p className="font-semibold text-2xl mt-7 mb-3">By Ingredients</p>
      <div className="flex mr-12 gap-x-14">
        <div className="w-2/3 flex flex-col gap-y-5">
          <div className="flex justify-between items-center">
            <div className="max-w-[20rem]">
              <SearchForm
                onSearch={setSearchIngredient}
                placeholder={"Ingredient name"}
              ></SearchForm>
            </div>
            <p className="text-lg">{selectedIngredients.length} selected</p>
          </div>
          {/* ingredients */}
          <div className="bg-gray-200 rounded-xl w-full min-h-[10rem] flex gap-x-4 gap-y-3 flex-wrap p-4">
            {ingredients.map((ingr, idx) => (
              <div
                draggable
                onDragStart={(e) => {
                  handleDrag(e, ingr);
                }}
                key={idx}
                className="text-black bg-white rounded-md px-3 py-1 h-fit cursor-pointer"
              >
                {ingr}
              </div>
            ))}
          </div>
          {/* ingredients selected */}
          {/* <div
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            className="bg-gray-200 rounded-xl w-full min-h-[4rem] flex gap-x-4 gap-y-3 flex-wrap p-4"
          >
            {selectedIngredients.map((ingr, idx) => (
              <div
                key={idx}
                className="text-black bg-white rounded-md px-3 py-1 h-fit cursor-pointer"
              >
                {ingr}
              </div>
            ))}
          </div> */}
        </div>
        <div className="flex flex-col items-center justify-center -mx-10">
          <p className="whitespace-nowrap">drag and drop</p>
          <div className=" w-full h-[1rem] flex items-center">
            <div className="h-1/4 w-full bg-black"></div>
            <div className="h-0 w-0 border-y-[0.5rem] border-l-[0.6rem] border-r-0 border-transparent border-l-[black]"></div>
          </div>
        </div>
        <div
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          className="w-1/3 relative"
          draggable={false}
        >
          <img src="/src/assets/plato.png" draggable={false} />
          <div
            id="plato"
            className="top-[15%] bottom-[15%] left-[15%] right-[15%] absolute flex justify-center items-center"
          >
            <div className="flex flex-row flex-wrap justify-center gap-2">
              {selectedIngredients.map((ingr, idx) => (
                <div className="w-fit p-[2px] bg-blue-400 rounded-md" key={idx}>
                  <div className="text-white bg-white bg-opacity-20 rounded-md px-3 py-1 h-fit cursor-pointer w-fit">
                    {ingr}
                    <span
                      onClick={(e) => removeIngredient(ingr)}
                      className="pl-1"
                    >
                      <IoClose className="inline"></IoClose>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
