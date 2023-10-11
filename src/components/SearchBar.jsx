export default function SearchBar() {
  return (
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
  );
}
