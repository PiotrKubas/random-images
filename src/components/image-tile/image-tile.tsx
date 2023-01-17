import clsx from 'clsx';
import { useRef, useState } from 'react';
import { IMAGE_CLIKS_ALLOWED } from '../../App';
import './image-tile.style.css';

interface ImageTileProps {
  defaultId: number;
  onClick: () => void;
}
export const ImageTile = ({ defaultId, onClick }: ImageTileProps) => {
  const [currentId, setCurrentId] = useState(defaultId);
  const { current: randomColor } = useRef(
    '#' + (Math.random().toString(16) + '000000').substring(2, 8)
  );

  const isAllowed = currentId - defaultId < IMAGE_CLIKS_ALLOWED;
  const imageClass = clsx(isAllowed ? 'enabled' : 'disabled');

  const handleClick = () => {
    if (isAllowed) {
      onClick();
      setCurrentId((prev) => prev + 1);
    }
  };

  return (
    <li onClick={handleClick}>
      <img
        src={`https://picsum.photos/id/${currentId}/400/300`}
        style={{ borderColor: randomColor }}
        className={imageClass}
      />
    </li>
  );
};
