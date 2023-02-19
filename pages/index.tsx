import ExplainationElement from '@components/ExplainationElement';
import GradientBackgroundImg from '@components/GradientBackgroundImg';

const Home = () => {
  return (
    <div className="h-[1000vh] space-y-20">
      <section>
        <div className="flex flex-col space-x-10 space-y-10 md:flex-row md:space-y-0">
          <h1 className="flex flex-col items-center space-y-1 text-center text-8xl font-black md:items-start">
            <span>Liberty</span>
            <span>For</span>
            <span>Slaves</span>
          </h1>
          <GradientBackgroundImg
            src={'/cover-images/1.jpg'}
            alt="Black Slave Trading"
            width={1080}
            height={1080}
          />
        </div>
      </section>
      <section>
        <h2 className="text-5xl font-black">We are...</h2>
        <div className="grid grid-cols-1 gap-3 py-20 md:grid-cols-2 lg:grid-cols-3 lg:pt-16">
          <ExplainationElement
            bigText={['Abolitionist', 'Organization']}
            description="Is what we have been working as for informing Black Slave Trading."
          />
          <ExplainationElement
            bigText={['Eradicating', 'Fighting']}
            description="Are we are dedicated to. Eradicating slave ownership, Fighting for human rights."
          />
          <ExplainationElement
            bigText={['Oppression', 'Coercion']}
            description="Is what we really want to remove from our world and make sure they will never do again."
          />
          <ExplainationElement
            bigText={['Our', 'Mission']}
            description="Are to create a slavery-free wourld where everyone has freedom from oppression"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
