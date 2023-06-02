// 275d58779ccf4e22af03e792e8819fff
// https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}

const apiKey = '275d58779ccf4e22af03e792e8819fff';
const recipeListEl = document.getElementById('recipe-list');

function displayRecipe(recipes) {
  recipeListEl.innerHTML = '';
  recipes.forEach((recipe) => {
    const createRecipe = createRecipeElement(recipe);
    recipeListEl.appendChild(createRecipe);
  });
}

function createRecipeElement(recipe) {
  const recipeItemEl = document.createElement('li');
  recipeItemEl.classList.add('recipe-item');

  const recipeImgEl = document.createElement('img');
  recipeImgEl.src = recipe.image;

  const recipeTitleEl = document.createElement('h2');
  recipeTitleEl.innerHTML = recipe.title;

  const recipeIngredientsEl = document.createElement('p');
  recipeIngredientsEl.innerHTML = `<strong>Ingredients : </strong> ${recipe.extendedIngredients
    .map((ingredient) => ingredient.original)
    .join(', ')}`;

  recipeItemEl.appendChild(recipeImgEl);
  recipeItemEl.appendChild(recipeTitleEl);
  recipeItemEl.appendChild(recipeIngredientsEl);

  return recipeItemEl;
}

async function getRecipeList() {
  const response = await fetch(
    `https://api.spoonacular.com/recipes/random?number=10&apiKey=${apiKey}`
  );
  const data = await response.json();
  return data.recipes;
}

async function getInitialRecipes() {
  const recipes = await getRecipeList();
  displayRecipe(recipes);
}

getInitialRecipes();
