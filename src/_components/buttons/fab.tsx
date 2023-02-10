'use client';
import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { useState, useEffect } from 'react';
import {
  ArrowDownIcon,
  UserPlusIcon,
  BarsArrowUpIcon
} from '@heroicons/react/24/outline';

const items = [
  {
    title: 'Adicionar',
    description: 'Adicionar usuários ao Prestativ app',
    icon: 'user-add',
    href: '/'
  }
];
const Fab = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Popover className="">
      <button
        className="fixed bottom-0 right-0 m-6 p-3 rounded-full bg-gray-500 text-white bg-orange-500 hover:bg-orange-600"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? (
          <ArrowDownIcon width={18} height={18} />
        ) : (
          <BarsArrowUpIcon width={18} height={18} className="" />
        )}
      </button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
        show={expanded}
      >
        <Popover.Panel className="fixed bottom-20 right-12 z-10 w-screen max-w-xs transform">
          <div className="overflow-hidden rounded-lg shadow-lg">
            {items.map((item, index) => (
              <div key={index} className="flex">
                <UserPlusIcon width={30} height={30} />
                <a
                  href={'#'}
                  className="block rounded-md transition duration-150 ease-in-out hover:text-orange-500"
                >
                  <p className="text-base font-medium text-gray-900">
                    {item.title}
                  </p>
                  <p className="mt-1 text-sm text-gray-500">
                    {item.description}
                  </p>
                </a>
              </div>
            ))}
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default Fab;
