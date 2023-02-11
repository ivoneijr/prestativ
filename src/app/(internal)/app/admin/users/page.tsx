'use client';
import { useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import UsersTable from './_components/UsersTable';
import { SearchInput } from '@/_components/inputs/InputSearch';
import Fab from '@/_components/buttons/fab';
import Page from '../../../../../_components/layout/Page';
import useFetch from '@/hooks/useFetch';

export default function Users() {
  const pathname = usePathname();
  const params = useSearchParams();
  const router = useRouter();

  const [q, setQ] = useState(params.get('q') || '');
  const { data: users, loading } = useFetch(
    `http://localhost:4000/users?q=${q}`
  );

  const handleSearchPress = (e: any) => {
    if (e.key === 'Enter') {
      setQ(e.target.value);
      router.push(`${pathname}?q=${e.target.value}`);
    }
  };

  return (
    <Page
      title="Usuários"
      description="Lista completa de usuários que possuem acvesso ao app Prestativ"
    >
      <SearchInput onKeyDown={handleSearchPress} />
      <UsersTable users={users ?? []} loading={loading} />
      <Fab />
    </Page>
  );
}
