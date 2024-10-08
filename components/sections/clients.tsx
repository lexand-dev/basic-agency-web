import style from "@/utils/scroll-progress.module.css";
import { CarouselItem } from "@/components/carousel-item";

const CLIENTS = [
  {
    title: "Google",
    description:
      "Our embedded partnership with Google is as deep as it gets. We’re the lead creative agency for Google Store and provide strategy, design, and prototyping to other divisions. Learn more about our partnership",
    image:
      "https://cdn.sanity.io/images/8nn8fua5/production/7121121ed910b145bdb6df487966a7888c2eb7c3-272x92.svg?w=720&fm=webp&q=65",
  },
  {
    title: "KFC",
    description:
      "An award-winning global, digital transformation engagement spanning eCommerce, mobile app, and new drive thru experiences. Bringing KFC’s brand story to life while making it easier for customers to buy chicken. Learn more about our partnership ",
    image:
      "https://cdn.sanity.io/images/8nn8fua5/production/09a68ec6d03469bfd5bbb9726a58225acb900ae2-128x42.svg?w=720&fm=webp&q=65",
  },
  {
    title: "AT&T",
    description:
      "A reimagining of Wilson’s brand visual identity, and brand campaign, to support a new product drop and the launch of the first brick and mortar retail location in the brand’s 108-year history. Read our full case study ",
    image:
      "https://cdn.sanity.io/images/8nn8fua5/production/fbb650ce74c1849cb4da2d9951fad89149494cc9-171x42.svg?w=720&fm=webp&q=65",
  },
  {
    title: "Patagonia",
    description:
      "Ongoing partnership providing strategy, branding, experience design, and development focused on bringing their mission and offerings to consumers through brand-led programs and platforms. Read our full case study ",
    image:
      "https://cdn.sanity.io/images/8nn8fua5/production/8dd2f090726c8d5befeaa2924b44678e69452945-1024x200.svg?w=720&fm=webp&q=65",
  },
];

export const Clients = () => {
  return (
    <section className="px-6 mb-12">
      <div className="meta-bar-alpha">
        <figure className="h-[.01rem] bg-black"></figure>
        <div className="row mt-8 text-xs leading-none">
          <div>00</div>
          <div className="flex justify-between">
            <span>/05</span>
            <span>●</span>
          </div>
        </div>
      </div>
      <h2 className="uppercase max-w-24 mt-16 font-semibold text-xl">
        Featured Engagements
      </h2>
      {/*       <div className="carousel relative left-[calc(1.5rem*-1)] w-[calc(100%+1.5rem*2)] cursor-none ">
        <div
          className={`${style.gallery__scrollcontainer} pl-8 relative [] overflow-x-scroll snap-x snap-mandatory`}
        >
          <ul className="flex pt-16">
            {CLIENTS.map((client, index) => (
              <CarouselItem
                key={index}
                {...client}
                className={cn(index !== 0 ? "ml-6" : "ml-0")}
              />
            ))}
          </ul>
          <div className={style.gallery__progress}></div>
        </div>
      </div> */}
      <div className="carousel relative left-[calc(1.5rem*-1)] w-[calc(100%+1.5rem*2)] cursor-none">
        <div
          className={`${style.gallery__scrollcontainer} pl-8 relative overflow-x-scroll snap-x snap-mandatory overflow-clip`}
        >
          <ul className="flex pt-16">
            {CLIENTS.map((client, index) => (
              <CarouselItem key={index} {...client} />
            ))}
          </ul>
          <div className={style.gallery__progress}></div>
        </div>
      </div>
    </section>
  );
};
