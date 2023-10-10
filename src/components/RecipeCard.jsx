export default function RecipeCard(props) {
  const { recipeId, recipeName = 'Beef and Brocoli', imgSrc = 'brooke-lark-jUPOXXRNdcA-unsplash.jpg' } = props;

  return (
    <div className="recipe-card overflow-hidden rounded-lg bg-slate-700">
      <img className="max-h-24 w-full object-cover" src={imgSrc}></img>
      <div className="px-2 py-2">
        <a href={`/recipe/${recipeId}`} className="text-white">
          <p className="text-lg font-bold">{recipeName}</p>
        </a>
        <p>
          3.5 <span>⭐</span>
        </p>
        <p>Simplicity: 5/10</p>
        <p>Time: ~0.5 hours</p>
        <p>Match score: 7.5</p>
      </div>
    </div>
  );
}
