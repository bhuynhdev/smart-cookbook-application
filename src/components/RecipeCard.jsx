export default function RecipeCard(props) {
  const { recipeId = '1', recipeName = 'Amazing Salad', imgSrc = 'brooke-lark-jUPOXXRNdcA-unsplash.jpg' } = props;

  return (
    <div className="recipe-card overflow-hidden rounded-lg bg-slate-700">
      <a href={`/recipe/${recipeId}`}>
        <img className="max-h-24 w-full object-cover" src={imgSrc}></img>
      </a>
      <div className="px-2 py-2">
        <p className="text-lg font-bold">{recipeName}</p>
        <p>Simplicity: 5/10</p>
        <p>Time: ~0.5 hours</p>
        <p>Match score: 7.5</p>
      </div>
    </div>
  );
}
