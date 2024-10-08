import { Button } from "@/components/ui/button";
import { OverviewLogo } from "@/components/logo";

export const Overview = () => {
  return (
    <section className="px-6 pb-8">
      <figure className="h-[.01rem] bg-current mb-14"></figure>
      <div className="flex flex-col">
        <div className="">
          <h3 className="tracking-tight font-medium leading-tight text-xl">
            BASIC/DEPT® is a global branding and digital design agency building
            products, services, and eCommerce experiences that turn cultural
            values into company value.
          </h3>
          <Button
            className="uppercase mt-16 text-xs font-semibold"
            variant="outline"
          >
            <span className="px-4 inline-block">see the work</span>
          </Button>
        </div>
        <figure className="mt-24 mr-0 mb-0 ml-auto">
          <OverviewLogo />
        </figure>
      </div>
    </section>
  );
};
