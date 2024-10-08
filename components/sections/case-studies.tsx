export const CaseStudies = () => {
  return (
    <section className="px-6 overflow-auto mb-12">
      <ul className="flex">
        <li className="shrink-0 w-72">
          <a className="" href="">
            <div className="overflow-hidden">
              <div className="hover:[transform:scale3d(1.05,1.05,1)] transition-transform relative overflow-hidden w-full">
                <svg
                  className="w-full h-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 720 900"
                  width="720"
                  height="900"
                ></svg>
                <picture>
                  <img
                    className="absolute top-0 left-0 w-full h-full z-10"
                    src="https://cdn.sanity.io/images/8nn8fua5/production/931c4de4f3cbbeb30a5b65677a174f2980e44805-720x900.jpg?w=720&fm=webp&q=65"
                    alt=""
                  />
                </picture>
              </div>
            </div>
            <div className="uppercase pt-4">
              <h5 className="text-lg font-medium">Patagonia</h5>
              <p className="text-xs mt-4 max-w-32">
                An eCommerce experience driven by Patagonia’s brand mission
              </p>
            </div>
          </a>
        </li>
        <li className="shrink-0 w-72 ml-4">
          <a className="" href="">
            <div className="overflow-hidden">
              <div className="[transform:scale3d(1.05,1.05,1)] transition-transform relative overflow-hidden w-full">
                <svg
                  className="w-full h-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 720 900"
                  width="720"
                  height="900"
                ></svg>
                <picture>
                  <img
                    className="absolute top-0 left-0 w-full h-full z-10"
                    src="https://cdn.sanity.io/images/8nn8fua5/production/f1931ee572cd014ca5c3b5fe7e6054cfc0583624-720x900.jpg?w=720&fm=webp&q=65"
                    alt=""
                  />
                </picture>
              </div>
            </div>
            <div className="uppercase pt-4">
              <h5 className="text-lg font-medium">Wilson</h5>
              <p className="text-xs mt-4 max-w-32">
                A century-old sports brand finding its place in culture
              </p>
            </div>
          </a>
        </li>
        <li className="shrink-0 w-72 ml-4">
          <a className="" href="">
            <div className="overflow-hidden">
              <div className="[transform:scale3d(1.05,1.05,1)] transition-transform relative overflow-hidden w-full">
                <svg
                  className="w-full h-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 720 900"
                  width="720"
                  height="900"
                ></svg>
                <picture>
                  <video
                    autoPlay
                    muted
                    loop
                    className="absolute top-0 left-0 w-full h-full z-10"
                    src="/overview.mp4"
                  />
                </picture>
              </div>
            </div>
            <div className="uppercase pt-4">
              <h5 className="text-lg font-medium">Google Store</h5>
              <p className="text-xs mt-4 max-w-32">
                An eCommerce experience helping Google bring its hardware to
                people across the globe
              </p>
            </div>
          </a>
        </li>
      </ul>
    </section>
  );
};
