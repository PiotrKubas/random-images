import { createRef, useMemo, useRef, useState } from 'react';
import { ImageList } from './components/image-list/image-list';
import './App.css';

export const IMAGES_COUNT = 15;
export const IMAGE_CLIKS_ALLOWED = 5;

function App() {
  const [listId, setListId] = useState(0);
  const [clickCounter, setClickCounter] = useState(0);

  const imageIds = useMemo(() => {
    const ids = [];
    for (let i = 0; i < IMAGES_COUNT; i++) {
      ids.push((IMAGE_CLIKS_ALLOWED + 1) * i);
    }
    return ids;
  }, [IMAGES_COUNT, IMAGE_CLIKS_ALLOWED]);

  const handleReset = () => {
    setListId((prev) => prev + 1);
    setClickCounter(0);
  };
  const handleImageClick = () => {
    setClickCounter((prev) => prev + 1);
  };

  return (
    <div className="page">
      <div className="container">
        <button onClick={handleReset}>Reset</button>
        <ImageList
          key={listId}
          imageIds={imageIds}
          onImageClick={handleImageClick}
        />
        <h1 className="counter">All clicks: {clickCounter}</h1>
      </div>
    </div>
  );
}

export default App;
