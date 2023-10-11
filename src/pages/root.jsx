import { Link, Outlet, useLoaderData } from 'react-router-dom';
import { create } from 'zustand';
import SmartDevice from '../components/SmartDevice';
import '../styles/root.css';
// import recipes from '../recipe-db.json';
// import { useLocation } from 'react-router-dom';
// import SearchBar from '../components/SearchBar';

export const useBearStore = create(set => ({
  step: 0,
  recipe: null,
  logs: [],
  isSessionDone: true,
  nextStep: () =>
    set(state => {
      if (state.recipe) {
        const newStep = Math.min(state.step + 1, state.recipe.directions.length - 1);
        return { step: newStep, logs: [...state.logs, `Go to step ${newStep}`] };
      }
      return state;
    }),
  prevStep: () =>
    set(state => {
      if (state.recipe) {
        const newStep = Math.max(state.step - 1, 0);
        return { step: newStep, logs: [...state.logs, `Go to step ${newStep}`] };
      }
      return state;
    }),
  setRecipe: recipeData => set({ recipe: recipeData }),
  startSession: recipe => set({ isSessionDone: false, recipe: recipe, step: 0 }),
  endSession: () => set({ isSessionDone: true, logs: [], recipe: null, step: 0 }),
}));

export async function loader({ request }) {
  const url = new URL(request.url);
  let instructions = '';

  if (url.pathname === '/') {
    instructions = `
  - Search in the search bar, or click onto the Search Nav item. Click "Advanced filter" for extra filters
  - Click on a recipe to go to that recipe's detail page
  `;
  } else if (url.pathname.includes('search')) {
    instructions = `
  - Search in the search bar, or click onto the 'Search' nav item. Click "Advanced filter" for extra filters
  - The Advanced Filter allows filtering by protein, cooking time, and simplicity (number of steps)
  - Click on a recipe to go to that recipe's detail page
    `;
  } else if (url.pathname.includes('recipe')) {
    instructions = `
  - Scroll and read through the recipe detail
  - Click "Start session" button at the end to start a streaming session to the rectangular screen, so that you can start interracting with the recipe without the phone
    `;
  } else if (url.pathname.includes("session")) {
    instructions = `
  - The mobile phone UI is now a log of action took on the wall screen
  - The Wall screen is supposedly controlled through gestures (in real life). Simulation buttons are provided
  - Click Next or Previous to progress through the recipe
  - Click End Session to end the cooking session
  - Clicking on other routes on the mobile app UI (such as Home or Search) will also end the session
    `
  }

  return { instructions };
}

export default function Root() {
  const { instructions } = useLoaderData();

  return (
    <div className="layout grid grid-cols-1 gap-32 md:grid-cols-[1fr_auto]">
      <div className="frame flex flex-col px-4 py-6">
        <header className="mb-4 flex items-center justify-between">
          <Link to="#">LOGO</Link>
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
        <Outlet />
      </div>

      <div>
        <SmartDevice />
        <div className="instructions mt-6 space-y-2">
          <p className="font-bold">Instructions</p>
          <p>The Left Screen is the mobile app UI, which has been sized to model iPhone aspect ratio</p>
          <p>
            The Right Screen is a wall-mounted device screen streams the recipe content from the mobile app and is
            supposedly controlled through gesture so that users needn&apos;t touch anything while cooking
          </p>
          <p>
            The below instructions texts show the actions a user can take, and update as you navigate through the pages: 
          </p>
          <ul>
            {instructions.split('\n').map((text, i) => (
              <li key={i}>{text.trim()}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
