import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="flexCenter mb-[24px]">
      <div className="padding-container max-container flex w-full flex-col gap-14">
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
          <Link href="/" className="mb-[10px]">
            <Image src="hilink-logo.svg" alt="logo" width={74} height={29} />
          </Link>

          <div className="flex flex-wrap gap-10 sm:justify-between md:flex-1">
            {FOOTER_LINKS.map((link) => (
              <FooterColumn title={link.title}>
                <ul className="regular-14 flex flex-col gap-4 text-gray-30 ">
                  {link.links.map((item) => (
                    <Link href="/" key={item}>
                      {item}
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            ))}

            <div className="flex flex-col gap-5">
              <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                {FOOTER_CONTACT_INFO.links.map((item) => (
                  <Link
                    className="flex gap-4 md:flex-col lg:flex-row"
                    href="/"
                    key={item.label}
                  >
                    <p className="whitespace-nowrap">{item.label}</p>
                    <p className="meduim-14 whitespace-nowrap text-blue-70">
                      {item.value}
                    </p>
                  </Link>
                ))}
              </FooterColumn>
            </div>
            <div className="flex flex-col gap-5">
              <FooterColumn title={SOCIALS.title}>
                <ul className="regular-14 flex gap-4 text-gray-30">
                  {SOCIALS.links.map((item) => (
                    <Link className="" href="/" key={item}>
                      <Image src={item} alt="logo" width={24} height={24} />
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            </div>
          </div>
        </div>

        <div className="border bg-gray-20" />

        <p className="regular-14 w-full text-center text-gray-30">
          2023 Yusuf | All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

type footerColumnProp = {
  title: string;
  children: React.ReactNode;
};

const FooterColumn = ({ title, children }: footerColumnProp) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="bold-18 whitespace-nowrap">{title}</h4>
      {children}
    </div>
  );
};

export default Footer;
