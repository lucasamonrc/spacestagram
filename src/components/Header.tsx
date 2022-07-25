import { Bookmark } from 'phosphor-react';
import { Link } from 'react-router-dom';
import { Title } from './Title';

export function Header() {
  return (
    <header className="py-8 flex justify-between">
      <Title />
      <div className="flex items-center gap-4">
        <Link
          to="/bookmarks"
          className="flex gap-1 items-center font-bold hover:text-sky-400 hover:-translate-y-1 transition"
        >
          <Bookmark weight="fill" size={28} />
          Bookmarked
        </Link>
      </div>
    </header>
  );
}
