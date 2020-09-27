import { useAtom } from 'jotai';
import { dirPrice } from '~/atoms';

const ArrowUp = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    className="h-4 w-4"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 7l4-4m0 0l4 4m-4-4v18"
    />
  </svg>
);

const ArrowDown = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    className="h-4 w-4"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 17l-4 4m0 0l-4-4m4 4V3"
    />
  </svg>
);

const Sorting = () => {
  const [dir, setDir] = useAtom(dirPrice);
  return (
    <button
      className="flex items-center h-10 text-sm bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow transition duration-150"
      onClick={() => setDir((prev) => (prev == 'asc' ? 'desc' : 'asc'))}
    >
      <span className="mr-1">價格</span>
      {dir == 'desc' ? <ArrowDown key="down" /> : <ArrowUp key="up" />}
    </button>
  );
};

export default Sorting;
