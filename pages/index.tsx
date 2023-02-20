import ExplainationElement from '@components/ExplainationElement';
import GradientBackgroundImg from '@components/GradientBackgroundImg';
import HaveDoneElement from '@components/HaveDoneElement';
import Section from '@components/Section';
import SectionSeparater from '@components/SectionSeparater';

const Home = () => {
  return (
    <div className="h-[1000vh]">
      <Section>
        <div className="flex flex-col md:flex-row md:space-y-0">
          <h1 className="flex flex-col items-center space-y-1 pb-10 text-center text-8xl font-black md:items-start md:pr-20">
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
      </Section>
      <SectionSeparater
        pathD={
          'M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z'
        }
        nextSectionMainColour="white"
      />
      <Section className="bg-white text-black">
        <h2 className="text-5xl font-black">We are a group like...</h2>
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
      </Section>
      <SectionSeparater
        pathD={'M649.97 0L550.03 0 599.91 54.12 649.97 0z'}
        nextSectionMainColour="white"
      />
      <Section className="-pt-20">
        <h2 className="text-5xl font-black">We have done...</h2>
        <div className="pt-20 md:flex md:space-x-10">
          <HaveDoneElement
            imageSrc="/have-done/example.jpg"
            name="Example"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          />
          <HaveDoneElement
            imageSrc="/have-done/song.jpg"
            name="Song"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          />
        </div>
      </Section>
    </div>
  );
};

export default Home;
