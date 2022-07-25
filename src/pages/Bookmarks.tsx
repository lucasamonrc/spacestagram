import { Header } from '../components/Header';

interface Picture {
  title: string;
  url: string;
  date: string;
}

function Bookmarks() {
  return (
    <div>
      <Header />
      <main className="my-8">
        <h1>Bookmarks</h1>
      </main>
    </div>
  );
}

export default Bookmarks;
