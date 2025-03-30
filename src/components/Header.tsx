
import React from "react";
import { cn } from "@/lib/utils";

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <header className={cn(
      "sticky top-0 z-30 flex items-center justify-between w-full px-4 py-3 bg-background/80 backdrop-blur-xl border-b",
      className
    )}>
      <div className="flex items-center">
        <h1 className="text-xl font-semibold bg-gradient-to-r from-brand to-purple-400 bg-clip-text text-transparent">
          loopify
        </h1>
      </div>
    </header>
  );
};

export default Header;
