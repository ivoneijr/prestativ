export default function StatusBadge({
  isActive = false
}: {
  isActive?: boolean;
}) {
  return isActive ? (
    <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
      Ativo
    </span>
  ) : (
    <span className="inline-flex rounded-full bg-red-100 px-2 text-xs font-semibold leading-5 text-green-800">
      Inativo
    </span>
  );
}
