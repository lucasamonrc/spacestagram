import { Bookmark } from 'phosphor-react';
import { useState } from 'react';

interface ImageProps {
  title: string;
  date: string;
  url: string;
  bookmarked?: boolean;
}

export function Image({ url, title, date, bookmarked = false }: ImageProps) {
  const [isBookmarked, setIsBookmarked] = useState(() => bookmarked);

  function toggleBookmark() {
    if (!isBookmarked) {
      const image = { title, date, url };

      const pics = JSON.parse(
        localStorage.getItem('spacestagram@bookmarks') || '[]'
      ) as any[];

      pics.push(image);

      localStorage.setItem('spacestagram@bookmarks', JSON.stringify(pics));
    } else {
      let pics = JSON.parse(
        localStorage.getItem('spacestagram@bookmarks') || '[]'
      ) as any[];

      pics = pics.filter((pic) => pic.date !== date);
      localStorage.setItem('spacestagram@bookmarks', JSON.stringify(pics));
    }

    setIsBookmarked(!isBookmarked);
  }

  return (
    <div className="relative rounded-lg shadow mb-8 overflow-hidden group">
      <img src={url} className="aspect-auto" alt="" />
      <button
        onClick={toggleBookmark}
        className="absolute top-2 right-2 opacity-0 group-hover:opacity-90 transition"
      >
        <Bookmark size={28} weight={isBookmarked ? 'fill' : 'bold'} />
      </button>
    </div>
  );
}
