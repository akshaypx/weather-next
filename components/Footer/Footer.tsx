import { Github, Globe, Twitter } from "lucide-react";
import Link from "next/link";
import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="max-w-[900px] w-full p-4 flex gap-4 justify-between items-center">
      <p className="text-muted-foreground">All rights reserved.</p>
      <div className="flex gap-4 justify-center items-center">
        <Link href="https://twitter.com/pxdev0">
          <Twitter size={20} />
        </Link>
        <Link href="https://github.com/akshaypx">
          <Github size={20} />
        </Link>
        <Link href="https://portfolio-2023-drab-nu.vercel.app/">
          <Globe size={20} />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
