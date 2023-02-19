import Link from "next/link";
import { AnchorHTMLAttributes } from "react";

interface IAnchorProps {
  href: string;
  children: React.ReactNode;
}

const Anchor = ({
  href,
  children,
  ...props
}: IAnchorProps & AnchorHTMLAttributes<HTMLAnchorElement>) => (
  <Link href={href} passHref legacyBehavior {...props}>
    <a className="cursor-pointer">{children}</a>
  </Link>
);

export default Anchor;
