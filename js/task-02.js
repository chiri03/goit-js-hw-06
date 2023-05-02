const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("ul#ingredients");

const createIngredientsList = (ingredients) => {
  return ingredients.map((ingredient) => {
    const item = document.createElement("li");
    item.textContent = ingredient;
    item.classList.add("item");
    return item;
  });
};
const ingredientsArray = createIngredientsList(ingredients);
ingredientsList.append(...ingredientsArray);
