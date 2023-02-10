'use client';
import { KeyboardEvent, useEffect, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import UsersTable from './_components/UsersTable';
import { getUsersAPI } from '@/lib/services/users';
import { SearchInput } from '@/_components/inputs/InputSearch';
import Fab from '@/_components/buttons/fab';

export default function Users() {
  const pathname = usePathname();
  const params = useSearchParams();
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [q, setQ] = useState(params.get('q') || '');
  const [page] = useState(params.get('page') || 0);
  const [size] = useState(params.get('size') || 20);

  const getUsers = async () => {
    const apiUsers = await getUsersAPI({ page, size, q });

    setUsers(apiUsers);
    setLoading(false);
  };

  useEffect(() => {
    getUsers();
  }, []);

  const handleSearchPress = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      setLoading(true);
      router.push(`${pathname}?q=${q}&page=${page}&size=${size}`);
      getUsers();
    }
  };
  return (
    <>
      {/* header */}
      <div className="py-6">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="sm:flex sm:items-center">
            <div className="sm:flex-auto">
              <h1 className="text-2xl font-semibold text-gray-900">Users</h1>

              <p className="mt-2 text-sm text-gray-700">
                Lista completa de usuários que possuem acesso ao app Prestativ
              </p>
            </div>
          </div>
        </div>

        {/* filtering */}
        <div className="px-4 sm:px-6 md:px-8 mt-8">
          <SearchInput
            onChange={(e: any) => {
              setQ(e.target.value);
            }}
            onKeyDown={handleSearchPress}
          />
        </div>

        {/* data */}
        <UsersTable users={users} loading={loading} />
      </div>
      <Fab />
    </>
  );
}
