import { ReactNode } from 'react';

interface Props {
  title: string;
  description: string;
  children: ReactNode;
}

export default function Page({ title, description, children }: Props) {
  return (
    <div className="py-6 px-4 sm:px-6 lg:px-8">
      <div className="mb-6">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-2xl font-semibold text-gray-900">{title}</h1>

            <p className="mt-2 text-sm text-gray-700">{description}</p>
          </div>
        </div>
      </div>

      {children}
    </div>
  );
}
