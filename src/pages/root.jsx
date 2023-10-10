import { Link, Outlet, useLoaderData } from 'react-router-dom';
import { create } from 'zustand';
import SmartDevice from '../components/SmartDevice';
import '../styles/root.css';
import recipes from '../recipe-db.json';

export const useBearStore = create(set => ({
  step: 0,
  recipe: recipes[0],
  nextStep: () => set(state => ({ step: Math.min(state.step + 1, state.recipe.directions.length - 1) })),
  prevStep: () => set(state => ({ step: Math.max(state.step - 1, 0) })),
  setRecipe: recipeData => set({ recipe: recipeData }),
}));

export async function loader() {
  const instructions = `
  - Click on the Profile picture on the top right to go to Profile page
  - Search in the search bar, and click "Advanced filter" for extra filters
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
              placeholder="Search recipes..."
            />
            <button type="button" className="absolute right-2 top-1 text-sm text-blue-300 underline">
              Advanced filter
            </button>
          </div>
        </form>
        <Outlet />
      </div>

      <div>
        <SmartDevice />
        <div className="instructions mt-6 space-y-1">
          <p className="font-bold">Instructions</p>
          <p>These instructions show the actions a user can perform on the smartphone app UI on the left</p>
          <p>
            I&apos;ve tried to made the UI as intuitive as possible. Putting the instructions here for extra clarity
          </p>
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
