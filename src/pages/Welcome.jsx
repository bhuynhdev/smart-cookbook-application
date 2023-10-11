import RecipeCard from '../components/RecipeCard';
import SearchBar from '../components/SearchBar';

export default function WelcomePage() {
  return (
    <>
      <SearchBar />
      <div id="welcome" className="mb-2 space-y-2">
        <h1 className="text-3xl font-bold">Welcome back, BH</h1>
        <p>In the past week, you have:</p>
        <ul className="ml-6 list-disc">
          <li>
            Cooked <span className="font-bold">5</span> recipes
          </li>
          <li>
            Spent <span className="font-bold">15</span> hours cooking
          </li>
          <li>
            Made <span className="font-bold">4</span> reviews and helped <span className="font-bold">15</span> users
          </li>
        </ul>
        <p>Suggested recipes</p>
      </div>
      <div id="suggested-recipes" className="grid grid-cols-2 gap-4">
        <RecipeCard recipeId="1" />
        <RecipeCard recipeId="2" />
        <RecipeCard recipeId="3" />
        <RecipeCard recipeId="4" />
      </div>
    </>
  );
}
