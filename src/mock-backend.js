import recipes from "./recipe-db.json"

export function getRecipe(recipeId) {
  return recipes[0] ?? null;
}

export function filterRecipe(filterSettings) {
  const {difficulty, hours, keyword} = filterSettings;
  const filtered = recipes.filter(recipe => {
    if (recipe.title.includes(keyword) || recipe.desc.includes(keyword)) {
      return true
    }
    return false
  })
}