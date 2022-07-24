import { Bookmark } from 'phosphor-react';
import { useState } from 'react';

export function Image() {
  const [bookmarked, setBookmarked] = useState(false);

  function toggleBookmark() {
    setBookmarked(!bookmarked);
  }

  return (
    <div className="relative rounded-lg shadow mb-8 overflow-hidden group">
      <img
        src="https://apod.nasa.gov/apod/image/2207/a11pan1040226lftsm600.jpg"
        className="aspect-auto"
        alt=""
      />
      <button
        onClick={toggleBookmark}
        className="absolute top-2 right-2 opacity-0 group-hover:opacity-90 transition"
      >
        <Bookmark size={28} weight={bookmarked ? 'fill' : 'bold'} />
      </button>
    </div>
  );
}
