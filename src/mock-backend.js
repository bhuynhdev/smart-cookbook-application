import recipes from "./recipe-db.json"

export function getRecipe(recipeId) {
  return recipes.filter(recipe => recipe.id === recipeId)[0] ?? null;
}

export function filterRecipe(filterSettings) {
  const {protein, hours, query, simplicity} = filterSettings;
  const filtered = recipes.filter(recipe => {
    if (query && !recipe.title.toLowerCase().includes(query) && !recipe.desc.toLowerCase().includes(query)) {
      return false
    }
    if (protein && protein.length > 0 && recipe.ingredients.every(ingredient => !protein.includes(ingredient.name))) {
      return false;
    }
    if (hours) {
      if (hours === "2" && recipe.time > 1) return false // <1 hour
      if (hours === "3" && recipe.time > 2) return false // <2 hour
      if (hours === "4" && recipe.time > 3) return false // <3 hour
      if (hours === '5' && recipe.time <= 3) return false // 3+ hour
    }
    if (simplicity) {
      const stepCount = recipe.directions.length;
      if (simplicity === "2" && stepCount > 10) return false // <10 steps
      if (simplicity === "3" && stepCount > 20) return false // <20 steps
      if (simplicity === "4" && stepCount <= 20) return false // 20+ steps
    }
    return true;
  })

  return filtered;
}