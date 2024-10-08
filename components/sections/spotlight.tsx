import { Button } from "@/components/ui/button";

export const Spotlight = () => {
  return (
    <section className="px-6 mt-8 w-full">
      <div>
        <div className="relative overflow-hidden w-full">
          <svg
            className="block w-full h-auto pointer-events-none"
            xmlns="http://www.w3.org/2000/svg"
            width="866px"
            height="1214px"
            viewBox="0 0 866 1214"
          ></svg>
          <video
            muted
            loop
            autoPlay
            className="object-cover absolute top-0 left-0 w-full h-full"
            src="/spotlight.mp4"
          ></video>
        </div>
      </div>
      <div className="uppercase mt-20">
        <q className="block tracking-tighter leading-[.9] text-6xl font-bold [quotes:none]">
          BASIC/DEPT® helps brands ● connect w/ culture
        </q>
        <span className="block mt-10 font-light ">
          Adweek <strong className="font-bold">Agency Spotlight</strong>
        </span>
        <Button
          className="uppercase mt-10 text-xs font-semibold hover:text-white hover:bg-black transition"
          variant="outline"
        >
          <span className="px-4 inline-block">About Us</span>
        </Button>
      </div>
    </section>
  );
};
