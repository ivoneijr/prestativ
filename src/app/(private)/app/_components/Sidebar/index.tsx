'use client';
import { Disclosure } from '@headlessui/react';

const navigation = [
  { name: 'Dashboard', href: '/app', current: true },
  {
    name: 'Timesheet',
    current: false,
    href: '/app/timesheet'
  },
  {
    name: 'Treinamentos',
    current: false,
    children: [{ name: 'SAP', href: '/app/programs/sap' }]
  },
  {
    name: 'Arquivos',
    current: false,
    children: [
      { name: 'Pessoal', href: '/app/files/personal' },
      { name: 'Compartilhado', href: '/app/files/shared' }
    ]
  },
  {
    name: 'Administrador',
    current: false,
    children: [
      { name: 'Usuários', href: '/app/admin/users' },
      { name: 'Clientes', href: '/app/admin/clients' },
      { name: 'Projetos', href: '/app/admin/projects' },
      { name: 'Relatórios', href: '/app/admin/reports' },
      { name: 'Site', href: '/app/admin/site' }
    ]
  }
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}

export default function Sidebar() {
  return (
    <div className="flex flex-grow flex-col overflow-y-auto border-r border-gray-200 bg-white pt-5 pb-4">
      <div className="flex flex-shrink-0 items-center px-4">
        <img
          className="h-8 w-auto"
          src="/prestativ-logo.png"
          alt="Your Company"
        />
      </div>
      <div className="mt-5 flex flex-grow flex-col">
        <nav className="flex-1 space-y-1 bg-white px-2" aria-label="Sidebar">
          {navigation.map((item) =>
            !item.children ? (
              <div key={item.name}>
                <a
                  href={item.href}
                  className={classNames(
                    item.current
                      ? 'bg-gray-100 text-gray-900'
                      : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                    'group w-full flex items-center pl-7 pr-2 py-2 text-sm font-medium rounded-md'
                  )}
                >
                  {item.name}
                </a>
              </div>
            ) : (
              <Disclosure as="div" key={item.name} className="space-y-1">
                {({ open }) => (
                  <>
                    <Disclosure.Button
                      className={classNames(
                        item.current
                          ? 'bg-gray-100 text-gray-900'
                          : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                        'group w-full flex items-center pr-2 py-2 text-left text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500'
                      )}
                    >
                      <svg
                        className={classNames(
                          open ? 'text-gray-400 rotate-90' : 'text-gray-300',
                          'mr-2 h-5 w-5 flex-shrink-0 transform transition-colors duration-150 ease-in-out group-hover:text-gray-400'
                        )}
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                      >
                        <path d="M6 6L14 10L6 14V6Z" fill="currentColor" />
                      </svg>
                      {item.name}
                    </Disclosure.Button>
                    <Disclosure.Panel className="space-y-1">
                      {item.children.map((subItem) => (
                        <Disclosure.Button
                          key={subItem.name}
                          as="a"
                          href={subItem.href}
                          className="group flex w-full items-center rounded-md py-2 pl-10 pr-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                        >
                          {subItem.name}
                        </Disclosure.Button>
                      ))}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            )
          )}
        </nav>
      </div>
    </div>
  );
}
