import { useEffect, useState } from 'react';

import { Header } from '../components/Header';
import { Image } from '../components/Image';

interface Picture {
  title: string;
  url: string;
  date: string;
}

function Bookmarks() {
  const [pictures, setPictures] = useState<Picture[]>([]);
  const [bookmarked, setBookmarked] = useState<string[]>([]);

  useEffect(() => {
    if (pictures.length === 0) {
      const pics = JSON.parse(
        localStorage.getItem('spacestagram@bookmarks') || '[]'
      ) as Picture[];

      setPictures(pics);
      const dates = pics.map((pic) => pic.date);
      setBookmarked(dates);
    }
  }, []);

  return (
    <div>
      <Header />
      <main className="my-8">
        <div className="columns-3 gap-8">
          {pictures.map((pic) => (
            <Image
              key={pic.date}
              url={pic.url}
              date={pic.date}
              title={pic.title}
              bookmarked={bookmarked.includes(pic.date)}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default Bookmarks;
