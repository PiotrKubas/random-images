import { ImageTile } from '../image-tile/image-tile';
import './image-list.style.css';

interface ImageListProps {
  imageIds: number[];
  onImageClick: () => void;
}
export const ImageList = ({ imageIds, onImageClick }: ImageListProps) => {
  return (
    <ul>
      {imageIds.map((id) => (
        <ImageTile key={id} defaultId={id} onClick={onImageClick} />
      ))}
    </ul>
  );
};
