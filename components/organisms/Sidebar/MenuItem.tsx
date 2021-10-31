import Image from 'next/image';
import Link from 'next/link';
import className from 'classnames';

interface MenuItemProps {
    title: string;
    icon: 'overview' | 'transaction' |'message' | 'card' | 'reward' | 'setting' | 'logout';
    active?: boolean;
    href?: string;
    onCLick?: () => void
}

export default function MenuItem(props: Partial<MenuItemProps>) {
  const {
    title, icon, active, href = '/', onCLick,
  } = props;
  const classItem = className({
    item: true,
    'mb-30': true,
    active,
  });
  return (
        <div className={classItem} onClick={onCLick}>
            <div className="me-3">
                <Image src={`/icon/icon-menu-${icon}.svg`} width={25} height={25} alt="overview" />
            </div>
            <p className="item-title m-0">
            {onCLick
              ? <a type="button" className="text-lg text-decoration-none">{title}</a>
              : (
              <Link href={href}>
                <a className="text-lg text-decoration-none">{title}</a>
              </Link>
              )}
            </p>
        </div>
  );
}
