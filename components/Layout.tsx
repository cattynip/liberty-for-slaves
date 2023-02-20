import Header from '@components/header';
import Footer from './Footer';

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {
  return (
    <div className="bg-black text-white">
      <Header />
      <main className="mx-auto max-w-5xl pt-28">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
