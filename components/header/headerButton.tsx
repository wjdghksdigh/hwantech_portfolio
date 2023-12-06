import Link from 'next/link';

interface Props {
  name: string;
}

const HeaderButton = ({ name }: Props) => {
  return (
    <Link href={`#${name}`} scroll={false}>
      <button className="container text-xs md:text-base px-4 capitalize">{name}</button>
    </Link>
  );
};

export default HeaderButton;