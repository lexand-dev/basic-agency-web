import { Button } from "@/components/ui/button";
import { NewsItem } from "../news-item";

const NEWS = [
  {
    title: "No longer the affordable option, QSRs look to connect with culture",
    source: "Adweek",
    date: "7.17.24",
    link: "https://www.basicagency.com/thinking/no-longer-the-affordable-option-qsrs-look-to-connect-with-culture",
    image:
      "https://cdn.sanity.io/images/8nn8fua5/production/ab6254ed2544d68fc7525db4482c53fc431e7dff-1000x734.png?w=720&fm=webp&q=65",
  },
  {
    title: "The Future of Fashion and AI at Glossy's Ecommerce Summit",
    source: "Adweek",
    date: "7.17.24",
    link: "#",
    image:
      "https://cdn.sanity.io/images/8nn8fua5/production/e1ee6f1258bdc530b8843f97029f804856f72d61-2000x1468.jpg?w=720&fm=webp&q=65",
  },
  {
    title: "Retail’s new playground: where physical meets digital",
    source: "Adweek",
    date: "7.17.24",
    link: "#",
    image:
      "https://cdn.sanity.io/images/8nn8fua5/production/11a5f82ab2838edc5756c262023dcc3ffe0bd0b8-1000x734.png?w=720&fm=webp&q=65",
  },
  {
    title: "Gen Alpha, the beta test for how brands can reach a new generation",
    source: "Adweek",
    date: "7.17.24",
    link: "#",
    image:
      "https://cdn.sanity.io/images/8nn8fua5/production/1f72d719b320cc973839fabfd6cff390d3aac1c4-1000x734.jpg?w=720&fm=webp&q=65",
  },
  {
    title: "New Projects on the Podium for the 28th Webby Awards",
    source: "Adweek",
    date: "7.17.24",
    link: "#",
    image:
      "https://cdn.sanity.io/images/8nn8fua5/production/1e04aa777778cf8bd2395e66ee1e8b4d9b2e94a6-870x544.png?w=720&fm=webp&q=65",
  },
  {
    title: "What Sofia Coppola Can Teach Us About Shifting Culture",
    source: "Adweek",
    date: "7.17.24",
    link: "#",
    image:
      "https://cdn.sanity.io/images/8nn8fua5/production/8063a6f5ea9626cf98e092b801987075cf7fbe75-1000x734.jpg?w=720&fm=webp&q=65",
  },
  {
    title: "Are snacks the new meals in QSR?",
    source: "Adweek",
    date: "7.17.24",
    link: "#",
    image:
      "https://cdn.sanity.io/images/8nn8fua5/production/50bf1b0a9893d900573e40aa33b464c0456b86f5-1000x734.jpg?w=720&fm=webp&q=65",
  },
];

export const News = () => {
  return (
    <section className="px-6 my-6 overflow-hidden">
      <div className="flex items-center justify-between pt-32">
        <h2 className="uppercase max-w-60 text-4xl font-bold tracking-tighter leading-[1.1]">
          Featured News
        </h2>
        <Button
          className="uppercase text-xs font-semibold hover:text-white hover:bg-black transition"
          variant="outline"
        >
          <span className="px-4 inline-block">View All</span>
        </Button>
      </div>
      <ul className="mt-16">
        {NEWS.map((news, index) => (
          <NewsItem key={index} {...news} />
        ))}
      </ul>
    </section>
  );
};
