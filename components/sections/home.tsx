import { LogoAdAge, LogoAward, LogoCampaign } from "../partners";

export const HomeIntro = () => {
  return (
    <section className="w-full h-full">
      <div className="h-screen relative overflow-hidden">
        <div
          className="
          h-full
          w-full
          absolute
          top-0
          left-0
          z-10
        "
        >
          <video
            autoPlay
            loop
            muted
            className="h-full w-full object-cover"
            src="/home-intro.mp4"
          ></video>
        </div>
      </div>
      <ul className="flex w-full justify-center px-6 py-12 gap-x-4 uppercase text-center text-xs">
        <li className="flex-1">
          <a className="inline-flex [flexFlow:column] items-center" href="">
            <figure className="w-3/4 aspect-[175/101]">
              <LogoAdAge />
            </figure>
            <span className="mt-8 block">
              Design and Branding Agency of the Year
            </span>
          </a>
        </li>
        <li className="flex-1">
          <a className="inline-flex [flexFlow:column] items-center" href="">
            <figure className="w-3/4 aspect-[175/101]">
              <LogoAward />
            </figure>
            <span className="mt-8 block">Agency of the Year</span>
          </a>
        </li>
        <li className="flex-1">
          <a className="inline-flex [flexFlow:column] items-center" href="">
            <figure className="w-3/4 aspect-[175/101]">
              <LogoCampaign />
            </figure>
            <span className="mt-8 block">
              Digital Innovation Agency of the Year Finalist
            </span>
          </a>
        </li>
      </ul>
    </section>
  );
};
