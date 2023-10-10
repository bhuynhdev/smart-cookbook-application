import { Link } from 'react-router-dom';
import RecipeCard from '../components/RecipeCard';
import '../styles/root.css';
import { useLoaderData } from 'react-router-dom';

export async function loader() {
  const instructions = `
  - Click on the Profile picture on the top right to go to Profile page
  - Perform search in the search bar, and click "Advanced filter" for extra filters
  - Click on a recipe to go to that recipe's detail page
  `;
  return { instructions };
}

export default function Root() {
  const { instructions } = useLoaderData();

  return (
    <div className="layout grid grid-cols-1 gap-32 md:grid-cols-[1fr_auto]">
      <div className="frame px-4 pt-6">
        <header className="mb-4 flex items-center justify-between">
          <a href="#">LOGO</a>
          <nav>
            <ul className="flex items-center justify-end gap-3">
              <li className="list-none">
                <Link to="">Home</Link>
              </li>
              <li className="list-none">
                <Link to="search">Search</Link>
              </li>
              <li className="list-none">
                <button type="button" className="aspect-square w-10 rounded-[50%] bg-slate-600 p-0 text-center">
                  BH
                </button>
              </li>
            </ul>
          </nav>
        </header>
        <form className="relative mb-5">
          <div className="search-bar relative rounded-lg bg-slate-800">
            <input
              type="text"
              name="search"
              id="search"
              className="bg-transparent px-3 py-1"
              placeholder="Search reciples..."
            />
            <button type="button" className="absolute right-2 top-1 text-sm text-blue-300 underline">
              Advanced filter
            </button>
          </div>
        </form>
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
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
        </div>
      </div>

      <div>
        <div className="device">
          <p className="text-center">Device camera</p>
        </div>
        <div className="instructions mt-6 space-y-1">
          <p className="font-bold">Instructions</p>
          <p>These instructions show the actions a user can perform on the smartphone app UI on the left</p>
          <p>I&apos;ve tried to made the UI as intuitive as possible. Putting the instructions here for extra clarity</p>
          <ul>
            {instructions.split('\n').map((text, i) => (
              <li key={i}>{text}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
