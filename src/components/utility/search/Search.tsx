export interface ISearch {}

const Search: React.FC<ISearch> = () => {
  return (
    <form className="flex flex-col items-center gap-y-5">
      <div className="flex items-center rounded-full border-2 h-12 px-3 w-5/6 sm:w-96 gap-x-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-6 h-6 text-gray-400"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>

        <input
          type="text"
          placeholder="Search"
          className="w-full outline-none bg-transparent"
        />
      </div>

      <div className="flex flex-col items-center gap-y-5 sm:flex-row sm:gap-x-5">
        <button className="btn-primary">Google Search</button>
        <button className="btn-primary">I'm feeling lucky</button>
      </div>
    </form>
  );
}; 

export default Search;
