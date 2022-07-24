import { Bookmark, Books, SignIn, SignOut } from 'phosphor-react';
import { Title } from './Title';

export function Header() {
  const signedIn = true;

  return (
    <header className="py-8 flex justify-between">
      <Title />
      <div className="flex items-center gap-4">
        <a
          href="#"
          className="flex gap-1 items-center font-bold hover:text-sky-400 hover:-translate-y-1 transition"
        >
          <Bookmark weight="fill" size={28} />
          Bookmarked
        </a>

        <a
          href="#"
          className="flex gap-1 items-center font-bold hover:text-sky-400 hover:-translate-y-1 transition"
        >
          <Books weight="fill" size={28} />
          Collections
        </a>

        <a
          href="#"
          className="flex gap-1 items-center font-bold hover:text-sky-400 hover:-translate-y-1 transition"
        >
          {!signedIn ? (
            <>
              <SignIn weight="fill" size={28} />
              Sign in
            </>
          ) : (
            <>
              <SignOut weight="fill" size={28} />
              Sign out
            </>
          )}
        </a>
      </div>
    </header>
  );
}
