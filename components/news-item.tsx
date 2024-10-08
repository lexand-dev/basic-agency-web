interface NewsItemProps {
  title: string;
  image: string;
  link: string;
  date: string;
}

export const NewsItem = ({ image, title, link, date }: NewsItemProps) => {
  return (
    <li className="mt-6">
      <a
        className="
            outline-0 relative flex flex-wrap pt-8 
            before:absolute
            before:top-0
            before:right-0
            before:w-full
            before:h-[.01rem]
            before:bg-current"
        href={link}
      >
        <div className="overflow-hidden w-full">
          <div className="ease-out relative overflow-hidden w-full hover:[transform:scale3d(1.05,1.05,1)] transition-transform">
            <svg
              className="block w-full h-auto pointer-events-none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1000 734"
              width="1000"
              height="734"
            ></svg>
            <picture>
              <img
                className="absolute top-0 left-0 w-full h-full block"
                src={image}
                alt=""
              />
            </picture>
          </div>
        </div>
        <div className="relative w-full uppercase">
          <h5 className="hover:underline text-2xl tracking-tighter leading-[1.1] relative top-0 mt-6 font-normal">
            {title}
          </h5>
          <span className="text-xs tracking-tight leading-[1.14] inline-block mt-12">
            <b>Press </b>
            {date}
          </span>
          <figure className="absolute right-0 bottom-0 overflow-hidden w-6 h-6">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17">
              <path d="M.1 7.5h14v2H.1z"></path>
              <path d="m8.4 0 8.5 8.5-1.4 1.4L7 1.4z"></path>
              <path d="m7 15.6 8.5-8.5 1.4 1.4L8.4 17z"></path>
            </svg>
          </figure>
        </div>
      </a>
    </li>
  );
};
