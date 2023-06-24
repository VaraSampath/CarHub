import Image from "next/image";
import { footerLinks } from "@/constants";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className=" flex flex-col gap-5 mt-5 px-6 sm:px-16  border-t border-gray-200">
      <div className=" flex flex-wrap  justify-between max-md:flex-col py-10">
        <div className="flex flex-col justify-start items-start gap-6">
          <Image
            src="/logo.svg"
            width={118}
            height={18}
            alt="logo"
            className=" object-contain"
          />
          <p className=" text-base text-gray-500">
            Car Hub 2023 <br />
            All rights reserved &copy;
          </p>
        </div>
        <div className="footer__links">
          {footerLinks.map((link) => (
            <div
              key={link.title}
              className="footer__link"
            >
              <h3 className=" font-bold">{link.title}</h3>
              {link.links.map((item) => (
                <Link
                  key={item.title}
                  className="text-gray-500"
                  href={item.url}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className=" flex  flex-wrap justify-between items-center border-t border-gray-200 py-10">
        <p>
          @2023 Carhub. <br /> All rights reserved.
        </p>
        <div className="footer__copyrights-link">
          <Link
            href="/"
            className=" text-gray-500"
          >
            Privacy Policy
          </Link>
          <Link
            href="/"
            className=" text-gray-500"
          >
            Terms of use
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
