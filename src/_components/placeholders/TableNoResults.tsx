export default function TableNoResults({
  message,
  show
}: {
  message: string;
  show: boolean;
}) {
  return show ? (
    <div className="text-center py-4">
      <strong className="text-sm text-gray-400">{message} =(</strong>
    </div>
  ) : (
    <></>
  );
}
