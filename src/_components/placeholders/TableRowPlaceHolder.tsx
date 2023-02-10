export default function TableRowPlaceHolder({ cols }: { cols: number }) {
  return (
    <tr>
      {Array.from({ length: cols }, (_, index) => (
        <td
          key={index}
          className="whitespace-nowrap px-3 py-4 text-sm text-gray-500"
        >
          <div className="animate-pulse w-2/3 h-3 bg-slate-200"></div>
        </td>
      ))}
    </tr>
  );
}
