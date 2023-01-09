const mealsEl = document.getElementById('meals');

getRandomMeal();

async function getRandomMeal() {
  const resp = await fetch(
    'https://www.themealdb.com/api/json/v1/1/random.php'
  );
  const respData = await resp.json();
  const randomMeal = respData.meals[0];

  addMeal(randomMeal, true);
}

async function getMealById(id) {
  const resp = await fetch(
    'https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + id
  );

  const respData = await resp.json();
  const meal = respData.meals[0];

  return meal;
}

async function getMealsBySearch(term) {
  const resp = await fetch(
    'https://www.themealdb.com/api/json/v1/1/search.php?s=' + term
  );

  const respData = await resp.json();
  const meals = respData.meals;

  return meals;
}

function addMeal(mealData, random = false) {
  const meal = document.createElement('div');
  meal.classList.add('meal');

  meal.innerHTML = `
        <div class="meal-header">
            ${
              random
                ? `
            <span class="random"> Random Recipe </span>`
                : ''
            }
            <img
                src="${mealData.strMealThumb}"
                alt="${mealData.strMeal}"
            />
        </div>
        <div class="meal-body">
            <h4>${mealData.strMeal}</h4>
            <button class="fav-btn">
                <i class="fas fa-heart"></i>
            </button>
        </div>
    `;

  const btnEl = meal.querySelector('.meal-body .fav-btn');

  btnEl.addEventListener('click', () => {
    btnEl.classList.toggle('active');
  });

  mealsEl.appendChild(meal);
}

function addMealLS(mealId) {
  const mealIds = getMealsLS();

  localStorage.setItem('mealIds', JSON.stringify([...mealIds, mealId]));
}

function removeMealLS(mealId) {
  const mealIds = getMealsLS();

  localStorage.setItem(
    'mealIds',
    JSON.stringify(mealIds.filter((id) => id !== mealId))
  );
}

function getMealsLS() {
  const mealIds = JSON.parse(localStorage.getItem('mealIds'));

  return mealIds === null ? [] : mealIds;
}
