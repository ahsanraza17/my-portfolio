import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../../src/hooks/useMediaQuery";

const Link = ({ page, selectedPage, setSelectedPage }) => {
  const lowerCasePage = page.toLowerCase();

  return (
    <AnchorLink
      className={`${selectedPage === lowerCasePage ? "text-yellow" : ""}
        hover:text-yellow transition duration-500`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
  const [isMenuToggle, setIsMenuToggle] = useState(false);
  const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");
  const navBackground = isTopOfPage ? "transition duration-500" : "transition duration-500 bg-red"

  return (
    <nav className={` ${navBackground} z-40 py-6 w-full fixed top-0`}>
      <div className="flex items-center justify-between mx-auto w-5/6 ">
        <h4 className="font-playfair text-3xl font-black">Portfolio</h4>

        {/* Desktop Nav */}
        {isAboveSmallScreens ? (
          <div className="flex justify-between gap-14 font-opensans text-sm font-semibold">
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Skills"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Projects"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Testimonials"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Contact"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        ) : (
          <i
            className="fa-solid fa-bars rounded-full bg-red p-3"
            onClick={() => setIsMenuToggle(!isMenuToggle)}
          >
          </i>
        )}

        {/* Mobile popup menu */}
        {!isAboveSmallScreens && isMenuToggle && (
          <div className="fixed right-0 bottom-0 h-full bg-blue w-[300px]">
            <div className="flex justify-end p-12">
              <i
                className="fa-solid fa-xmark"
                onClick={() => setIsMenuToggle(!isMenuToggle)}
              ></i>
            </div>
            {/* menu items */}
            <div className="flex flex-col gap-10 ml-[33%] text-2xl text-deep-blue">
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Skills"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Projects"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Testimonials"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Contact"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
