import { Fish } from '~/models/Fish';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const FishCard = ({ name, iconUri, price,  }: Fish) => {
  return (
    <div className="flex">
      <div className="w-40 h-40 px-4 pt-2 pb-1 mx-auto rounded overflow-hidden shadow-lg text-center">
        <h3 className="text-lg text-gray-800 font-bold">{name.nameTWzh}</h3>
        <LazyLoadImage
          src={iconUri}
          height={80}
          width={80}
          alt={name.nameTWzh}
          effect="opacity"
        />
        <p className="text-indigo-900">${price}</p>
      </div>
    </div>
  );
};

export default FishCard;
