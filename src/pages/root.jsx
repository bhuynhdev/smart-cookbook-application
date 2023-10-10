import RecipeCard from '../components/RecipeCard';
import '../styles/root.css';

export default function Root() {
  return (
    <div className="layout grid grid-cols-2 gap-40">
      <div className="frame px-4 pt-6">
        <header className="mb-4 flex items-center justify-between">
          <a href="#">LOGO</a>
          <nav className="flex justify-end">
            <ul>
              <li className="list-none">
                <button type="button" className="h-12 w-12 rounded-[50%] bg-slate-600 p-0 text-center">
                  BH
                </button>
              </li>
            </ul>
          </nav>
        </header>
        <form className="relative mb-6">
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
        <div id="welcome" className="space-y-4 mb-6">
          <h1 className="text-3xl font-bold">Welcome back, BH</h1>
          <p>In the past week, you have:</p>
          <ul className="ml-6 list-disc">
            <li>
              Cooked <span className="font-bold">5</span> reciples
            </li>
            <li>
              Spent <span className="font-bold">15</span> hours cooking
            </li>
            <li>
              Made <span className="font-bold">4</span> reviews and helped <span className="font-bold">15</span> users
            </li>
          </ul>
          <p>Suggested reciples</p>
        </div>
        <div id="suggested-recipes" className="grid grid-cols-2 gap-x-4 gap-y-6">
          <RecipeCard/>
          <RecipeCard/>
          <RecipeCard/>
          <RecipeCard/>
        </div>
      </div>

      <div className="instructions">Instructions</div>
    </div>
  );
}
