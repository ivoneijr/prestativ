import {
  ChevronLeftIcon,
  RectangleGroupIcon,
  LockOpenIcon,
  ClockIcon,
  BookOpenIcon,
  FolderIcon
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

    default:
      return <>-no icon-</>;
  }
}
