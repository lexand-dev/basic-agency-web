"use client";
import { useOpenMenu } from "@/hooks/use-open";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Logo } from "./logo";

const Header = () => {
  const { onOpen } = useOpenMenu();

  return (
    <header className="bg-transparent fixed top-0 left-0 w-full overflow-hidden z-20">
      <div className="flex p-4 items-center text-white">
        <Link className="font-semibold" href="/">
          <div className="fill-current w-32">
            <Logo />
          </div>
        </Link>
        <Button onClick={() => onOpen()} className="ml-auto" variant="ghost">
          <span className="font-semibold text-base">MENU</span>
        </Button>
      </div>
    </header>
  );
};

export default Header;
