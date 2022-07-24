import { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Image } from './components/Image';
import { getLast10Pictures } from './lib/nasa';

interface Picture {
  title: string;
  url: string;
  date: string;
}

function App() {
  const [pictures, setPictures] = useState<Picture[]>([]);

  useEffect(() => {
    if (pictures.length === 0) {
      getLast10Pictures()
        .then((pics) => setPictures(pics))
        .catch((err) => console.error(err.message));
    }
  }, []);

  console.log(pictures);

  return (
    <div>
      <Header />
      <main className="my-8">
        <h1 className="text-3xl font-bold text-sky-400 mb-4">
          Todays pictures:
        </h1>

        <div className="columns-3 gap-8">
          {pictures.map((pic) => (
            <Image
              key={pic.date}
              url={pic.url}
              date={pic.date}
              title={pic.title}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
