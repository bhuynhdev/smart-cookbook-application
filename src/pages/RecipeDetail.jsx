import { useLoaderData } from 'react-router-dom';
import { getRecipe } from '../mock-backend';

export async function loader({ params }) {
  const recipeInfo = getRecipe(params.recipeId);
  return { recipeInfo };
}

export default function RecipeDetailPage() {
  const { recipeInfo } = useLoaderData();

  const { title, desc, image, portion, ingredients, directions, rating } = recipeInfo;

  return (
    <div>
      <img src={'/' + image} className="mb-3 aspect-video object-cover" />
      <h1 className="inline text-xl font-bold">{title}</h1>
      <p className="ml-4 inline">{rating} ⭐</p>
      <p>{desc}</p>
      <p>For {portion} portions</p>
      <div className="ingredients">
        <p className="font-bold">Ingredients</p>
        <ul>
          {ingredients.map(({ name, unit, value }) => (
            <li key={name}>
              {name}: {value} {unit}
            </li>
          ))}
        </ul>
      </div>
      <div className="directions mb-6">
        <p className="font-bold">Directions</p>
        <ol>
          {directions.map((direction, i) => (
            <li className="ml-5 list-decimal" key={i}>
              {direction}
            </li>
          ))}
        </ol>
      </div>
      <div className="flex justify-center mb-4">
        <button type="button" className="w-[75%] rounded-md bg-red-700 px-4 py-2">
          Start Cooking session
        </button>
      </div>
    </div>
  );
}
