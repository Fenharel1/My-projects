const recipe = {
  img: "https://www.gastrolabweb.com/u/fotografias/m/2020/7/24/f1280x720-2014_133689_5050.jpg",
  name: "Ceviche de pulpo",
  time: "30 min",
  stars: 4,
  author: "Juana torrez delgado",
  ingredients: [
    "Pescado",
    "Sal",
    "Pimienta",
    "Arroz",
    "Maiz",
    "Pescado",
    "Sal",
    "Pimienta",
    "Arroz",
    "Maiz",
    "Pescado",
    "Sal",
    "Pimienta",
    "Arroz",
    "Maiz",
  ],
  instructions:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non... Ver mas",
  isFavorite: true,
};

export const getRecipeOfDay = () => {
  return recipe;
}

export const getAllRecipes = () => {
  const recipes = new Array(10).fill({})
  return recipes.map((ele,idx)=>{return {...recipe,['name']:recipe.name + ' ' + (idx+1)}});
};

export const getFavoritesRecipes = () => {
  return getAllRecipes().filter((r,idx) =>idx < 7 && idx > 2);
};
