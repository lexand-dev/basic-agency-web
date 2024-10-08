import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
} from "@/components/ui/sheet";
import { useOpenMenu } from "@/hooks/use-open";
import Link from "next/link";
import { Logo } from "./logo";

const Menu = () => {
  const { isOpen, onClose } = useOpenMenu();

  return (
    <div>
      <Sheet open={isOpen} onOpenChange={onClose}>
        <SheetContent side="top">
          <SheetTitle>
            <div className="fill-brand p-y-4 w-40 mb-16">
              <Logo />
            </div>
            <span className="sr-only">Menu</span>
          </SheetTitle>
          <SheetDescription className="sr-only">
            We are a global design and innovation consultancy. We create
            products, services, and experiences that improve people&apos; lives.
          </SheetDescription>
          <nav>
            <ul className="font-bold flex flex-col gap-y-4 text-lg">
              <li>
                <Link href="/work">WORK</Link>
              </li>
              <li>
                <Link href="/about">ABOUT</Link>
              </li>
              <li>
                <Link href="/about">NEWS</Link>
              </li>
              <li>
                <Link href="/about">THINKING</Link>
              </li>
              <li>
                <Link href="/about">CAREERS</Link>
              </li>
              <li>
                <Link href="/about">CONTACT</Link>
              </li>
              <li>
                <Link href="/about">INITIATIVES</Link>
              </li>
            </ul>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Menu;
