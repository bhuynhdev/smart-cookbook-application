export default function RecipeCard(props) {
  const {
    id = '1',
    title = 'Beef and Brocoli',
    image = 'brooke-lark-jUPOXXRNdcA-unsplash.jpg',
    simplicity = '6',
    time = '1'
  } = props;

  return (
    <div className="recipe-card overflow-hidden rounded-lg bg-slate-700">
      <img className="max-h-24 w-full object-cover" src={'/' + image}></img>
      <div className="px-2 py-2">
        <a href={`/recipe/${id}`} className="text-white">
          <p className="text-lg font-bold">{title}</p>
        </a>
        <p>
          3.5 <span>⭐</span>
        </p>
        <p>Simplicity: {simplicity}</p>
        <p>Time: ~{time} hours</p>
        <p>Match score: 7.5</p>
      </div>
    </div>
  );
}
