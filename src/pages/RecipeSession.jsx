import { useEffect } from 'react';
import { getRecipe } from '../mock-backend';
import { useBearStore } from './root';
import { Link } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';

export function loader({ params }) {
  const recipe = getRecipe(params.recipeId);
  return { recipe };
}

export default function RecipeSessionPage() {
  const { recipe: loadedRecipe } = useLoaderData();

  const { recipe, logs } = useBearStore(state => ({ logs: state.logs, recipe: state.recipe }));
  const { startSession, endSession } = useBearStore(state => ({
    startSession: state.startSession,
    endSession: state.endSession,
    setRecipe: state.setRecipe,
  }));

  useEffect(() => {
    startSession(loadedRecipe);
    return () => endSession();
  }, [startSession, endSession, loadedRecipe]);

  if (!recipe) {
    return (
      <div>
        No recipe in session. Click <Link to={-1}>here</Link> to go back
      </div>
    );
  }

  return (
    <div className="flex flex-grow flex-col justify-end">
      <div className="flex-grow">
        <p>Recipe in session...</p>
        <h1 className="text-xl font-bold">{recipe.title}</h1>
        <p>Initiated a cooking session to the smart device</p>
        <p>Log:</p>
        <ol>
          {logs.map((log, i) => (
            <li key={i}>{log}</li>
          ))}
        </ol>
      </div>
      <button type="button" className="w-32 rounded-md bg-red-500 px-1 py-2 self-center" onClick={endSession}>
        End Session
      </button>
    </div>
  );
}
