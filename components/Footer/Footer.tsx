import { Github, Globe, Twitter } from "lucide-react";
import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="max-w-[900px] w-full p-4 flex gap-4 justify-between items-center">
      <p className="text-muted-foreground">All rights reserved.</p>
      <div className="flex gap-4 justify-center items-center">
        <Twitter href="https://twitter.com/pxdev0" size={20} />
        <Github href="https://github.com/akshaypx" size={20} />
        <Globe href="https://portfolio-2023-drab-nu.vercel.app/" size={20} />
      </div>
    </div>
  );
};

export default Footer;
