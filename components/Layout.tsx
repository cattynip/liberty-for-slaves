import Header from '@components/header';

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {
  return (
    <div className="bg-black text-white">
      <Header />
      <main className="mx-auto max-w-5xl py-8 pt-28">{children}</main>
    </div>
  );
};

export default Layout;
