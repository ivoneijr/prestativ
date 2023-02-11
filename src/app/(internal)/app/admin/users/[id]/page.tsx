'use client';

import { useState } from 'react';
import dayjs from 'dayjs';

import useFetch from '@/hooks/useFetch';
import { User } from '@/types';
import StatusBadge from '@/_components/data/ActiveBadge';
import Field from '@/_components/data/Field';
import RoleBadge from '@/_components/data/RoleBadge';
import Icon from '@/_components/Icon';
import Page from '../../../../../../_components/layout/Page';

interface Props {
  params: { id: string };
}

export default function TableNoResults({ params: { id } }: Props) {
  const [editing, setEditing] = useState(false);
  const { data: user } = useFetch<User>(`http://localhost:4000/users/${id}`);

  return (
    <Page
      title={`${user?.firstName} ${user?.lastName}`}
      description="Perfil completo"
    >
      <div className="mb-4">
        <span className="text-gray-600">Cadastro</span>
      </div>
      <div className="overflow-hidden bg-white shadow sm:rounded-md p-6 hover:shadow-md">
        <div className="flex justify-end right-4">
          <Icon
            name={editing ? 'x-mark' : 'pencil-square'}
            className={`w-7 h-7 cursor-pointer ${
              editing ? 'text-red-500' : 'text-orange-500'
            }`}
            onClick={() => setEditing(!editing)}
          />
        </div>

        {!editing && (
          <>
            <div>
              <div className="grid grid-cols-4 gap-4">
                <Field label="Nome">
                  {user?.firstName} {user?.lastName}
                </Field>
                <Field label="Email">{user?.email}</Field>
                <Field label="Permissão">
                  <RoleBadge role={user?.role} />
                </Field>
                <Field label="Status">
                  <StatusBadge isActive={user?.isActive} />
                </Field>
                <Field label="Criado em">
                  {dayjs(user?.createdAt).format('DD/MMM/YYYY')}
                </Field>
              </div>
            </div>
          </>
        )}
        {editing && <div>content editing form</div>}

        {editing && (
          <div className="flex justify-end right-4">
            <button
              className="inline-flex items-center rounded-md border border-transparent bg-gray-100 px-3 py-2 text-sm font-medium leading-4 text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
              onClick={() => setEditing(false)}
            >
              Descartar
            </button>
            <button
              className="ml-4 inline-flex items-center rounded-md border border-transparent bg-orange-100 px-3 py-2 text-sm font-medium leading-4 text-orange-700 hover:bg-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
              onClick={() => setEditing(false)}
            >
              Salvar
            </button>
          </div>
        )}
      </div>
    </Page>
  );
}
