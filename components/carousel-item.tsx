import { cn } from "@/lib/utils";

interface CarouselItemProps {
  title: string;
  description: string;
  image: string;
  className?: string;
}

export const CarouselItem = ({
  title,
  description,
  image,
  className,
}: CarouselItemProps) => {
  return (
    <li className={cn(`shrink-0 w-72 mr-6`, className)}>
      <div className="flex w-full h-10 items-center">
        <div className="h-full relative overflow-hidden w-full">
          <svg
            className="w-full h-auto"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 272 92"
            width="272"
            height="92"
          ></svg>
          <picture>
            <img
              className="object-contain absolute top-0 left-0 w-28 h-10 z-10 object-left"
              src={image}
              alt=""
            />
          </picture>
        </div>
      </div>
      <h5 className="relative pt-10 mt-4 uppercase text-lg font-medium before:absolute before:top-0 before:left-0 before:w-8 before:h-[.1rem] before:bg-current">
        {title}
      </h5>
      <p className="mt-4 text-sm font-medium">{description}</p>
    </li>
  );
};
