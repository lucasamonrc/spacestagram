import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import { Header } from './components/Header';
import { Image } from './components/Image';
import { subtractOneDay } from './lib/dates';
import { get10MorePictures, getLast10Pictures } from './lib/nasa';

const CALLS_LIMIT = 2;

interface Picture {
  title: string;
  url: string;
  date: string;
}

function App() {
  const [pictures, setPictures] = useState<Picture[]>([]);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (pictures.length === 0) {
      getLast10Pictures()
        .then((pics) => setPictures(pics))
        .catch((err) => console.error(err.message));
    }
  }, []);

  async function getMore() {
    const lastDate = pictures.at(-1)?.date;
    const endDate = subtractOneDay(new Date(lastDate as string));

    const pics = await get10MorePictures(endDate);

    const newPictures = [...pictures, ...pics].sort((a, b) => {
      if (a.date > b.date) return -1;
      else return 1;
    });

    setPictures(newPictures);
    setCounter(counter + 1);
  }

  return (
    <div>
      <Header />
      <main className="my-8">
        <InfiniteScroll
          className="columns-3 gap-8"
          dataLength={pictures.length}
          next={getMore}
          hasMore={pictures.length > 0 && counter < CALLS_LIMIT}
          loader={<></>}
          endMessage={<></>}
        >
          {pictures.map((pic) => (
            <Image
              key={pic.date}
              url={pic.url}
              date={pic.date}
              title={pic.title}
            />
          ))}
        </InfiniteScroll>
      </main>
    </div>
  );
}

export default App;
