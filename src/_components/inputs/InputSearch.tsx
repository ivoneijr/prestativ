interface Props {
  onChange?: (e?: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

export function SearchInput({ onChange, onKeyDown }: Props) {
  return (
    <div className="w-full">
      <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden shadow ring-1 ring-black ring-opacity-5">
        <div className="grid place-items-center h-full w-12 text-gray-300 border-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        <input
          className="peer h-full w-full outline-none text-sm text-gray-700 pr-2 border-none"
          type="text"
          id="search"
          onChange={onChange}
          onKeyDown={onKeyDown}
          placeholder="Search something.."
        />
      </div>
    </div>
  );
}
