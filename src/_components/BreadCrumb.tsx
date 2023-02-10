'use client';

import { HomeIcon } from '@heroicons/react/20/solid';

export default function Breadcrumb({ path }: { path: string }) {
  const paths = path.split('/');

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
      <nav className="flex" aria-label="Breadcrumb">
        <ol role="list" className="flex items-center space-x-4">
          <li>
            <div>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <HomeIcon
                  className="h-5 w-5 flex-shrink-0"
                  aria-hidden="true"
                />
                <span className="sr-only">Home</span>
              </a>
            </div>
          </li>
          {paths.map((text, i) => (
            <li key={i}>
              <div className="flex items-center">
                <svg
                  className="h-5 w-5 flex-shrink-0 text-gray-300"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                </svg>
                <a
                  href={'#'}
                  className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                  aria-current={'page'}
                >
                  {text}
                </a>
              </div>
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
}