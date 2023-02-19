import GradientBackgroundImg from '@components/GradientBackgroundImg';

const Home = () => {
  return (
    <div>
      <div className="flex flex-col space-y-10">
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
    </div>
  );
};

export default Home;
