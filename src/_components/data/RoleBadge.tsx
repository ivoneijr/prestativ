export default function RoleBadge({ role }: { role?: string }) {
  switch (role) {
    case 'DEFAULT':
      return (
        <span className="inline-flex rounded-full bg-gray-100 px-2 text-xs font-semibold leading-5 text-gray-800">
          {role}
        </span>
      );
    case 'MANAGER':
      return (
        <span className="inline-flex rounded-full bg-yellow-100 px-2 text-xs font-semibold leading-5 text-yellow-800">
          {role}
        </span>
      );
    case 'ADMIN':
      return (
        <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
          {role}
        </span>
      );
    case 'SUPER_ADMIN':
      return (
        <span className="inline-flex rounded-full bg-red-100 px-2 text-xs font-semibold leading-5 text-red-800">
          {role}
        </span>
      );

    default:
      return (
        <span className="inline-flex rounded-full bg-blue-100 px-2 text-xs font-semibold leading-5 text-blue-800">
          {role}
        </span>
      );
  }
}
