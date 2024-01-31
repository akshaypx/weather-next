import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ModeToggle } from "../mode-toggle";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="w-full h-16 flex justify-between items-center px-4 py-2">
      <h3 className="font-bold text-xl">Weather App</h3>
      <div className="flex gap-4 items-center">
        <HoverCard>
          <HoverCardTrigger
            className="font-bold underline cursor-pointer"
            href="https://github.com/akshaypx"
          >
            @akshaypx
          </HoverCardTrigger>
          <HoverCardContent>
            Created and maintained by Akshay Srivastava.
          </HoverCardContent>
        </HoverCard>
        <ModeToggle />
        <Avatar>
          <AvatarImage src="https://github.com/akshaypx.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default Header;
