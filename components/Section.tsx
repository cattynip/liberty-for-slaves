import { HTMLAttributes } from 'react';

interface ISectionProps {
  children: React.ReactNode;
  className?: string;
}

const Section = ({
  children,
  className,
  ...props
}: ISectionProps & HTMLAttributes<HTMLElement>) => {
  return (
    <section className={`px-8 first:pb-36 ${className}`} {...props}>
      {children}
    </section>
  );
};

export default Section;
