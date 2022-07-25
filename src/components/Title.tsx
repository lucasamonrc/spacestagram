import { Planet } from 'phosphor-react';
import { Link } from 'react-router-dom';

export function Title() {
  return (
    <Link to="/" className="flex gap-2 items-center">
      <Planet weight="fill" size={48} />
      <p className="text-2xl font-bold">Spacestagram</p>
    </Link>
  );
}
