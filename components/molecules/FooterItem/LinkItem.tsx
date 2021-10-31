import Link from 'next/link';

interface LinkItemProps {
    name: string
}

export default function LinkItem(props: LinkItemProps) {
  const { name } = props;
  return (
        <li className="mb-6">
            <Link href="/#">
                <a className="text-lg color-palette-1 text-decoration-none">
                    {name}
                </a>
            </Link>
        </li>
  );
}
