import {
  ChevronLeftIcon,
  RectangleGroupIcon,
  LockOpenIcon,
  ClockIcon,
  BookOpenIcon,
  FolderIcon,
  PencilSquareIcon,
  XMarkIcon,
  EllipsisHorizontalIcon,
  EllipsisVerticalIcon
} from '@heroicons/react/24/outline';

export default function Icon({
  name,
  ...props
}: {
  name: string;
  [key: string]: any;
}) {
  switch (name) {
    case 'chevron-left':
      return <ChevronLeftIcon {...props} />;

    case 'dashboard':
      return <RectangleGroupIcon {...props} />;

    case 'lock-open':
      return <LockOpenIcon {...props} />;

    case 'clock':
      return <ClockIcon {...props} />;

    case 'book-open':
      return <BookOpenIcon {...props} />;

    case 'folder':
      return <FolderIcon {...props} />;

    case 'pencil-square':
      return <PencilSquareIcon {...props} />;

    case 'x-mark':
      return <XMarkIcon {...props} />;

    case 'ellipsis-horizontal':
      return <EllipsisHorizontalIcon {...props} />;

    case 'ellipsis-vertical':
      return <EllipsisVerticalIcon {...props} />;

    default:
      return <>-no icon-</>;
  }
}
