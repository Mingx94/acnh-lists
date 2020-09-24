import { memo, useState } from 'react';
import Link from 'next/link';
import classNames from 'classnames';

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <header className="bg-gray-900 sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3">
      <div className="flex items-center justify-between px-4 py-3 sm:p-0">
        <div>
          <img className="h-8" src="/images/Nook_Inc.png" alt="Nook Inc." />
        </div>
        <div className="sm:hidden">
          <button
            onClick={() => setOpen((isOpen) => !isOpen)}
            type="button"
            className="block text-gray-300 hover:text-white focus:text-white focus:outline-none"
          >
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              {isOpen ? (
                <path
                  fillRule="evenodd"
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      <div
        className={classNames(
          { block: isOpen, hidden: !isOpen },
          'px-2 pt-2 pb-4 sm:flex sm:p-0'
        )}
      >
        <Link href="/">
          <a className="block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800">
            魚類
          </a>
        </Link>

        <Link href="/insects">
          <a className="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800 sm:mt-0 sm:ml-2">
            昆蟲
          </a>
        </Link>
      </div>
    </header>
  );
};

export default memo(Header);
