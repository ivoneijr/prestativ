export default function Field({
  label,
  children
}: {
  label: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col">
      <span className="text-sm font-medium text-gray-600">{label}</span>
      <span className="pl-2 font-light text-gray-500">{children}</span>
    </div>
  );
}
