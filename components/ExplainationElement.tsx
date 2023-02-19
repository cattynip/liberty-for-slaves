interface IExplainationElementProps {
  bigText: string[];
  description: string;
}

const ExplainationElement = ({
  bigText,
  description
}: IExplainationElementProps) => {
  return (
    <>
      <div className="mx-auto flex w-3/4 flex-col items-center justify-center space-y-4 py-20 first:pt-0 md:mx-auto md:w-3/4 md:odd:pb-52 md:odd:pt-0 md:even:pt-52 md:even:pb-0 lg:my-auto lg:odd:py-8 lg:even:py-8">
        <h3 className="flex flex-col text-center text-4xl font-semibold">
          {bigText.map((value, index) => (
            <span key={index}>{value}</span>
          ))}
        </h3>
        <p className="text-center">{description}</p>
      </div>
    </>
  );
};

export default ExplainationElement;
