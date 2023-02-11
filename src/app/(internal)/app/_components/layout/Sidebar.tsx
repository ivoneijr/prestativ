/* eslint-disable @next/next/no-img-element */
'use client';
import { useState } from 'react';

import { ChevronLeftIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Icon from '@/_components/Icon';

const MENUS = [
  { name: 'Dashboard', href: '/app', icon: 'dashboard' },
  {
    name: 'Administrador',
    icon: 'lock-open',
    children: [
      { name: 'Usuários', href: '/app/admin/users' },
      { name: 'Clientes', href: '/app/admin/clients' },
      { name: 'Projetos', href: '/app/admin/projects' },
      { name: 'Relatórios', href: '/app/admin/reports' },
      { name: 'Site', href: '/app/admin/site' }
    ]
  },
  {
    name: 'Timesheet',
    icon: 'clock',
    href: '/app/timesheet'
  },
  {
    name: 'Treinamentos',
    icon: 'book-open',
    children: [{ name: 'SAP', href: '/app/programs/sap' }]
  },
  {
    name: 'Arquivos',
    icon: 'folder',
    children: [
      { name: 'Pessoal', href: '/app/files/personal' },
      { name: 'Compartilhado', href: '/app/files/shared' }
    ]
  }
];

export default function Sidebar() {
  const [open, setOpen] = useState(true);
  const [openedMenu, setOpenedMenu] = useState('');

  return (
    <div
      className={`${
        open ? 'w-72' : 'w-16'
      } duration-300 h-screen bg-gray-600 relative`}
    >
      <div className="p-5 pt-8">
        <ChevronLeftIcon
          width={24}
          height={24}
          className={`absolute cursor-pointer rounded-full -right-3 top-9 bg-white border-2 border-gray-600 ${
            !open && 'rotate-180'
          }`}
          onClick={() => setOpen(!open)}
        />

        {/* //TODO:  IMPLEMENT SUBMENUS AND LOGIC TO AVOID LINK WHEN HAS SUBITEMS*/}
        <div>
          <Link href={'/app'}>
            <img
              className={`${
                open ? 'h-10 rotate-[360deg]' : 'h-7 w-8'
              } cursor-pointer duration-500`}
              src="/p-logo.png"
              alt="Prestativ logo curto"
            />
          </Link>
        </div>

        <div className="px-6 pt-10">
          <hr className="border-gray-500" />
        </div>

        <ul className="pt-6">
          {MENUS.map((m) => (
            <li key={m.name}>
              {m.children ? (
                <div
                  onClick={() => setOpenedMenu(m.name)}
                  className={`${open && 'gap-x-4 cursor-pointer p-2'} ${
                    openedMenu === m.name
                      ? 'text-orange-300 bg-gray-500'
                      : 'text-gray-300'
                  } text-md flex items-center hover:bg-gray-500 rounded-md hover:text-orange-300`}
                >
                  <Icon
                    name={m.icon}
                    width={open ? 22 : 50}
                    height={open ? 22 : 50}
                  />
                  <span
                    className={`${!open && 'hidden'} origin-left duration-200`}
                  >
                    {m.name}
                  </span>
                </div>
              ) : (
                <Link
                  onClick={() => setOpenedMenu(m.name)}
                  href={m.href ?? '#'}
                  className={`${open && 'gap-x-4 cursor-pointer p-2'} ${
                    openedMenu === m.name
                      ? 'text-orange-300 bg-gray-500'
                      : 'text-gray-300'
                  } text-md flex items-center hover:bg-gray-500 rounded-md hover:text-orange-300`}
                >
                  <Icon
                    name={m.icon}
                    width={open ? 22 : 50}
                    height={open ? 22 : 50}
                  />
                  <span
                    className={`${!open && 'hidden'} origin-left duration-200`}
                  >
                    {m.name}
                  </span>
                </Link>
              )}

              {m.children && openedMenu === m.name && (
                <div className="pt-2 pl-4 ">
                  <ul className="flex flex-col pl-2 border-l border-gray-300">
                    {m.children.map((c) => (
                      <li key={c.name}>
                        <Link
                          onClick={() => setOpenedMenu(c.name)}
                          href={c.href ?? '#'}
                          className={`${open && 'gap-x-4 cursor-pointer p-2'} ${
                            openedMenu === c.name
                              ? 'text-orange-300 bg-gray-500'
                              : 'text-gray-300'
                          } text-md flex items-center hover:bg-gray-500 rounded-md hover:text-orange-300`}
                        >
                          <span
                            className={`${
                              !open && 'hidden'
                            } origin-left duration-200`}
                          >
                            {c.name}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>

        <div className="px-6 pt-10">
          <hr className="border-gray-500" />
        </div>
      </div>

      <div
        className={`${
          !open && 'hidden'
        } origin-left duration-200 absolute bottom-0 pl-6 pr-4 py-4 w-full bg-gray-500 flex items-center justify-between`}
      >
        <div className="flex items-center">
          <div className="relative w-8 h-8 rounded-full before:absolute before:w-2 before:h-2 before:bg-green-500 before:rounded-full before:right-0 before:bottom-0 before:ring-1 before:ring-white">
            <img
              className="rounded-full"
              src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
              alt=""
            />
          </div>
          <div className="flex flex-col pl-3">
            <div className="text-sm text-gray-50">Jane Doeson</div>
            <span className="text-xs text-[#acacb0] font-light tracking-tight">
              janedoeson@gmail.com
            </span>
          </div>
        </div>
        <button className="text-gray-400 bg-gray-700 rounded focus:outline-none focus:ring-1 focus:ring-gray-500 focus:text-white">
          <svg
            className="w-4 h-4 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M15.25 10.75L12 14.25L8.75 10.75"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
}
