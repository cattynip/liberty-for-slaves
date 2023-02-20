import Image from 'next/image';

interface IHaveDoneElementProps {
  imageSrc: string;
  name: string;
  description: string;
}

const HaveDoneElement = ({
  imageSrc,
  name,
  description
}: IHaveDoneElementProps) => {
  return (
    <div className="mb-20 h-fit rounded-lg bg-white p-5 text-black">
      <Image
        src={imageSrc}
        width={1080}
        height={1080}
        alt="This is what we have done."
        className="mb-10"
      />
      <hr className="border-black pt-5" />
      <div>
        <h3 className="pb-3 text-3xl font-bold">{name}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default HaveDoneElement;
