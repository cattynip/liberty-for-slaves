import ExplainationElement from '@components/ExplainationElement';
import GradientBackgroundImg from '@components/GradientBackgroundImg';
import HaveDoneElement from '@components/HaveDoneElement';
import ImageDescriptionElement from '@components/ImageDescritionElement';
import Section from '@components/Section';
import SectionSeparater from '@components/SectionSeparater';
import Image from 'next/image';

const Home = () => {
  return (
    <div>
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
      <Image
        src={'/divider/wave.svg'}
        width={1080}
        height={1080}
        alt="SectionDivider"
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
      <Image
        src={'/divider/triangle.svg'}
        width={1080}
        height={1080}
        alt="SectionDivider"
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
      <SectionSeparater waveType="gradient" nextSectionMainColour="white" />
      <Section className="bg-white pt-6 text-black">
        <div className="relative pt-4">
          <h2 className="text-5xl font-black">We have informed ourselves...</h2>
          <ImageDescriptionElement
            title="Instagram"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            className="bg-gradient-to-r from-[#833AB4] via-[#F56040] to-[#FFC837] bg-clip-text text-transparent"
          />
          <ImageDescriptionElement
            title="Website"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          />
        </div>
      </Section>
    </div>
  );
};

export default Home;
