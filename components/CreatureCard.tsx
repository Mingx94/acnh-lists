import { memo } from 'react';

const CreatureCard = ({ name, iconUri, price }: Fish) => {
  return (
    <div className="flex">
      <div className="max-w-full w-40 h-40 px-4 pt-2 pb-1 mx-auto rounded overflow-hidden shadow-lg text-center bg-white">
        <img
          className="inline"
          src={iconUri}
          height={80}
          width={80}
          alt={name.nameTWzh}
          loading="lazy"
        />
        <h4 className="text-base text-gray-700 font-bold">{name.nameTWzh}</h4>
        <p className="text-indigo-900">${price}</p>
      </div>
    </div>
  );
};

export default memo(CreatureCard) as typeof CreatureCard;
