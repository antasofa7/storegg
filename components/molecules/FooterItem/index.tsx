import LinkItem from './LinkItem';

interface FooterItemProps {
    title: string,
    link1: string,
    link2: string,
    link3: string,
    link4?: string
}

export default function FooterItem(props: Partial<FooterItemProps>) {
  const {
    title, link1, link2, link3, link4,
  } = props;
  return (
        <div className="col-md-4 col-6 mb-lg-0 mb-25">
            <p className="text-lg fw-semibold color-palette-1 mb-12">
                {title}
            </p>
            <ul className="list-unstyled">
                <LinkItem name={link1 || ''} />
                <LinkItem name={link2 || ''} />
                <LinkItem name={link3 || ''} />
                <LinkItem name={link4 || ''} />
            </ul>
        </div>
  );
}
