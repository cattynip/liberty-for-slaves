interface ISectionSeparaterProps {
  waveType: SeperatorType;
  nextSectionMainColour: string;
}

const SeperatorTypes = {
  wave: 'M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z',
  triangle: 'M649.97 0L550.03 0 599.91 54.12 649.97 0z'
};

type SeperatorType = keyof typeof SeperatorTypes | 'gradient';

const SectionSeparater = ({
  waveType,
  nextSectionMainColour
}: ISectionSeparaterProps) => {
  return (
    <>
      {waveType === 'gradient' ? (
        <div className="h-20 w-full bg-gradient-to-b from-black to-white" />
      ) : null}
      {waveType !== 'gradient' ? (
        <div className="relative">
          <div className="absolute top-0 left-0 w-full leading-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              className="relative block h-24 w-full"
            >
              <path
                d={SeperatorTypes[waveType]}
                className={`fill-${nextSectionMainColour}`}
              />
            </svg>
          </div>
          <div className="h-24" />
        </div>
      ) : null}
    </>
  );
};

export default SectionSeparater;
