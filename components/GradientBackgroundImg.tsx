/* eslint-disable jsx-a11y/alt-text */
import Image, { ImageProps } from 'next/image';

const GradientBackgroundImg = ({ ...props }: ImageProps) => {
  return (
    <div className="relative">
      <div className="absolute left-0 top-0 h-24 w-full bg-gradient-to-t from-transparent to-black" />
      <div className="absolute left-0 bottom-0 h-24 w-full bg-gradient-to-b from-transparent to-black" />
      <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-l from-transparent to-black" />
      <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-r from-transparent to-black" />
      <Image {...props} />
    </div>
  );
};

export default GradientBackgroundImg;
