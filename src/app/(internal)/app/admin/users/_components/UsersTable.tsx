import TableNoResults from '@/_components/placeholders/TableNoResults';
import TableRowPlaceHolder from '@/_components/placeholders/TableRowPlaceHolder';
import Link from 'next/link';

export default function UsersTable({ users, loading }: any) {
  return (
    <>
      <div className="mt-4 flex flex-col">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full py-2 align-middle">
            <div className="flex justify-between pt-1 mb-1">
              <div className="flex justify-start pt-1 pl-2 mb-1 text-sm text-gray-500">
                Total: <strong className="ml-2">{users.length}</strong>
              </div>
            </div>
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="table min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Title
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Role
                    </th>
                    <th
                      scope="col"
                      className="relative py-3.5 pl-3 pr-4 sm:pr-6"
                    >
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200 bg-white">
                  {loading ? (
                    <TableRowPlaceHolder cols={5} />
                  ) : (
                    users.map((user: any) => (
                      <tr key={user.id} className="hover:bg-gray-100">
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                          <div className="flex items-center">
                            <div className="h-10 w-10 flex-shrink-0">
                              <img
                                className="h-10 w-10 rounded-full"
                                src={
                                  'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                                }
                                alt=""
                              />
                            </div>
                            <div className="ml-4">
                              <div className="font-medium text-gray-900">
                                {`${user.firstName} ${user.lastName}`}
                              </div>
                              <div className="text-gray-500">{user.email}</div>
                            </div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          <div className="text-gray-900">{'pegar titulo'}</div>
                          <div className="text-gray-500">
                            {'pegar descricao'}
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {user.isActive ? (
                            <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                              Activo
                            </span>
                          ) : (
                            <span className="inline-flex rounded-full bg-red-100 px-2 text-xs font-semibold leading-5 text-green-800">
                              Inativo
                            </span>
                          )}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {user.role}
                        </td>
                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                          <Link
                            href={`/app/admin/users/${user.id}`}
                            className="text-gray-600 hover:text-orange-600"
                          >
                            Edit
                            <span className="sr-only">, {'que isso ?'}</span>
                          </Link>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>

              <TableNoResults
                message="Nenhum usuário encontrado"
                show={users.length === 0}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
