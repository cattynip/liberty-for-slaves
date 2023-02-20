interface ISectionSeparaterProps {
  pathD: string;
  nextSectionMainColour: string;
}

const SectionSeparater = ({
  pathD,
  nextSectionMainColour
}: ISectionSeparaterProps) => {
  return (
    <div className="relative">
      <div className="absolute top-0 left-0 w-full leading-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block h-24 w-full"
        >
          <path d={pathD} className={`fill-${nextSectionMainColour}`} />
        </svg>
      </div>
      <div className="h-24" />
    </div>
  );
};

export default SectionSeparater;
