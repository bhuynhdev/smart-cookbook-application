import { useLoaderData } from 'react-router-dom';
import RecipeCard from '../components/RecipeCard';
import { filterRecipe } from '../mock-backend';
import SearchBar from '../components/SearchBar';
import { useSearchParams } from 'react-router-dom';

export function loader({ request }) {
  const url = new URL(request.url);
  const query = url.searchParams.get('q');
  const protein = url.searchParams.getAll('protein');
  const hours = url.searchParams.get('hour');
  const simplicity = url.searchParams.get('simplicity');

  const filtered = filterRecipe({ query, protein, hours, simplicity });

  return { recipes: filtered, params: { query, protein, hours, simplicity } };
}

export default function SearchPage() {
  const { recipes, params } = useLoaderData();

  // If no query params
  if (
    params.protein.length === 0 &&
    Object.keys(params)
      .filter(key => key !== 'protein')
      .every(key => params[key] === null)
  ) {
    return (
      <div>
        <SearchBar />
        <p>No active search in process. Click on the Search bar and Advanced filter to begin your search</p>
      </div>
    );
  }

  return (
    <div>
      <SearchBar />
      {recipes.length} recipes found
      <p>{params.hours}</p>
      <div id="search-result" className="grid grid-cols-2 gap-4">
        {recipes.map((recipeInfo, i) => (
          <RecipeCard key={i} {...recipeInfo} />
        ))}
      </div>
    </div>
  );
}
