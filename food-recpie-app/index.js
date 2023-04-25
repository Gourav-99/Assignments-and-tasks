const recipeForm = document.querySelector("#recipe-form");
const input = recipeForm.querySelector("input");
const recipeList = document.querySelector(".recipes-list");
const loader = document.querySelector(".loader-container");
const showLoader = () => {
  loader.classList.toggle("hidden");
};
const showRecipes = (recipe) => {
  const foodCard = document.createElement("div");
  const foodItemDetails = `
  <div class='flex items-center justify-center px-2'>
  <div class='w-full max-w-md mx-auto bg-white rounded-3xl shadow-xl overflow-hidden'>
    <div class='max-w-md mx-auto'>
      <div class='h-[236px]'>
        <img src='${recipe.image}' alt='${
    recipe.label
  }' class='object-cover w-full h-full'>
      </div>
      <div class='p-4 sm:p-6' style='height: 300px;'>
        <p class='h-[35px] w-[350px] font-bold text-gray-700 text-[22px] leading-7 mb-1'>${
          recipe.label
        }</p>
        <p class='font-bold text-[#7C7C80] font-[15px] mt-6'>Description:</p>
        <ul>
          <li>Cuisine Type: ${recipe.cuisineType}</li>
          <li>Diet Labels: ${recipe.dietLabels}</li>
          <li>Dish Type: ${recipe.dishType}</li>
          <li>Total Weight: ${recipe.totalWeight.toFixed(2)}</li>
        </ul>
        <a target='_blank' href='${
          recipe.url
        }' class='block mt-10 w-full px-4 py-3 font-medium tracking-wide text-center capitalize transition-colors duration-300 transform bg-[#FFC933] rounded-[14px] hover:bg-[#FFC933DD] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80'>
          View for Details
        </a>
      </div>
    </div>
  </div>
</div>
`;
  foodCard.innerHTML = foodItemDetails;
  recipeList.appendChild(foodCard);
};
const searchForRecipe = async () => {
  try {
    showLoader();
    const searchString = input.value;
    const endPoint = `https://api.edamam.com/api/recipes/v2?type=public&q=${searchString}&app_id=0f649da1&app_key=c4617349e4334b66e1a01ee216b5f10b`;
    const response = await fetch(endPoint);
    const data = await response.json();
    console.log(data);
    const recipes = data.hits;
    for (const obj of recipes) {
      const { recipe } = obj;
      await showRecipes(recipe);
    }
  } catch (error) {
    console.log(error);
  } finally {
    showLoader();
  }
};
recipeForm.addEventListener("submit", (e) => {
  e.preventDefault();
  searchForRecipe();
});
