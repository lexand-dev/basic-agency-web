import React from "react";

interface FooterItemProps {
  title: string;
  links: {
    title: string;
    url: string;
  }[];
}

export const FooterItem = ({ title, links }: FooterItemProps) => {
  return (
    <>
      <h6 className="uppercase text-lg font-normal tracking-tight leading-[1.1] before:mr-[.5em] before:content-['●']">
        {title}
      </h6>
      <ul className="mt-6">
        <li className="text-sm font-medium leading-5">
          {links.map((link) => (
            <a key={link.title} href={link.url} className="block">
              {link.title}
            </a>
          ))}
        </li>
      </ul>
    </>
  );
};
