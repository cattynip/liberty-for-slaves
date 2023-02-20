import { HTMLAttributes } from 'react';

interface IImageDescriptionElementProps {
  title: string;
  description: string;
  className?: string;
}

const ImageDescriptionElement = ({
  title,
  description,
  className,
  ...props
}: IImageDescriptionElementProps & HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <div className="flex flex-col items-center justify-center py-10 md:flex-row">
      <h3
        className={`mb-5 pb-2 text-5xl font-extrabold md:w-72  md:pr-24 ${
          className ? className : ''
        }`}
        {...props}
      >
        {'via ' + title}
      </h3>
      <p className="text-center md:w-96">{description}</p>
    </div>
  );
};

export default ImageDescriptionElement;
