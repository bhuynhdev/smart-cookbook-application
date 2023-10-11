import { useRef, useEffect } from 'react';
import { getRecipe } from '../mock-backend';
import { useBearStore } from './root';
import { Link } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';

export function loader({ params }) {
  const recipe = getRecipe(params.recipeId);
  useBearStore.setState({ recipe });
  return { recipe };
}

export default function RecipeSessionPage() {
  const { recipe } = useLoaderData();

  const logs = useBearStore(state => state.logs);

  const logEndRef = useRef(null);

  if (!recipe) {
    return (
      <div>
        No recipe in session. Click <Link to="/">here</Link> to go back to home page
      </div>
    );
  }

  return (
    <div>
      <p>Recipe in session...</p>
      <h1 className="text-xl font-bold">{recipe.title}</h1>
      <p>Initiated a cooking session to the smart device</p>
      <p>Log:</p>
      <ol>
        {logs.map((log, i) => (
          <li key={i}>{log}</li>
        ))}
      </ol>
      <div></div>
    </div>
  );
}
