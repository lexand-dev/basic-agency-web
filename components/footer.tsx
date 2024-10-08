import { OverviewLogo } from "@/components/logo";
import { FooterItem } from "./footer-item";

const CONTENT_FOOTER = {
  social: [
    {
      title: "Instagram",
      url: "",
    },
    {
      title: "Twitter",
      url: "",
    },
    {
      title: "LinkedIn",
      url: "",
    },
    {
      title: "Facebook",
      url: "",
    },
  ],
  initiatives: [
    {
      title: "Crafated",
      url: "",
    },
    {
      title: "Applied",
      url: "",
    },
    {
      title: "Brandbeats",
      url: "",
    },
    {
      title: "Move",
      url: "",
    },
  ],
  offices: [
    {
      title: "Los Angeles",
      url: "",
    },
    {
      title: "San Francisco",
      url: "",
    },
    {
      title: "New York",
      url: "",
    },
  ],
};

export const Footer = () => {
  return (
    <footer className="relative mt-16 text-primary_brand_dark bg-primary_brand_light">
      <div className="px-6 pt-6 pb-16">
        <div>
          <div>
            <figure className="w-16 h-6">
              <OverviewLogo />
            </figure>
          </div>
          <div className="mt-12">
            <p className="max-w-80 text-2xl leading-[1]">
              We collaborate with ambitious brands and people. Let&apos;s build.{" "}
              <a
                className="underline inline-block"
                href="mailto:biz@basicagency.com"
              >
                biz@basicagency.com
              </a>
            </p>
          </div>
        </div>
        <div className="mt-16">
          <div className="col-form">
            <h6 className="uppercase text-lg font-normal tracking-tight leading-[1.1] before:mr-[.5em] before:content-['●']">
              Stay in the know
            </h6>
            <div className="relative mt-2">
              <form>
                <div className="relative pr-8 after:absolute after:top-full after:left-0 after:w-full after:h-[0.2rem] after:content-[''] after:[transform:scaleY(.5)] after:transition-transform after:bg-current after:origin-[50%_0]">
                  <input
                    type="email"
                    className="block bg-transparent w-full h-12 text-current leading-[5.5rem] focus:outline-none placeholder:text-current"
                    placeholder="Email Address"
                  />
                  <button
                    className="absolute top-1/2 right-0 w-5 h-4 [transform:translateY(-50%)]"
                    type="submit"
                  >
                    <figure>
                      <svg
                        className="fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 17 17"
                      >
                        <path d="M.1 7.5h14v2H.1z"></path>
                        <path d="m8.4 0 8.5 8.5-1.4 1.4L7 1.4z"></path>
                        <path d="m7 15.6 8.5-8.5 1.4 1.4L8.4 17z"></path>
                      </svg>
                    </figure>
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-social mt-10">
            {<FooterItem title="Social" links={CONTENT_FOOTER.social} />}
          </div>
          <div className="col-social mt-8">
            {
              <FooterItem
                title="Initiatives"
                links={CONTENT_FOOTER.initiatives}
              />
            }
          </div>
          <div className="col-social mt-8">
            {<FooterItem title="Offices" links={CONTENT_FOOTER.offices} />}
          </div>
        </div>
      </div>
      <div className="w-full p-5 bg-footer_secondary text-secondary_brand text-[0.70rem] leading-5 text-center uppercase">
        <span className="block">BASIC/DEPT®, Inc 10 - 24©</span>
        <span className="block">
          Easy to understand, impossible to ignore.™
        </span>
        <span className="block">
          <a href="">Terms</a>, <a href="">Privacy Policy</a>
        </span>
      </div>
    </footer>
  );
};
