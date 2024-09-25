import SocialMediaIcons from "../components/SocialMediaIcons"
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Landing = ({ setSelectedPage }) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center md:h-full gap-16 py-10"
    >
      {/* Image Section */}
      <div className="md:order-1 flex justify-center items-center basis-3/5 z-10 mt-24 md:mt-44">
        {isAboveMediumScreens ? (
          <div
            className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-16
                before:rounded-t-[400px] before:w-full before:max-w-[400px] before:h-full
                before:border-2 before:border-blue before:z-[-1]"
          >
            <img
              src="images/my-profile.jpg"
              className="hover:filter hover:saturate-150 transition duration-500 w-full z-10
                    rounded-t-[400px] max-w-[200px] md:max-w-[400px]"
              alt="profile"
            />
          </div>
        ) : (
          <img
            src="images/my-profile.jpg"
            className="hover:filter hover:saturate-150 transition duration-500 w-full z-10
                    rounded-t-[400px] max-w-[400px] md:max-w-[600px] flex justify-center"
            alt="profile"
          />
        )}
      </div>
      {/* Main Section */}
      <div className="z-30 basis-2/5 mt-20 md:mt-32">
        {/* Headings */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="text-6xl font-playfair z-10 text-center md:text-start">
            Ahsan {""}
            <span
              className="xs:relative xs:text-deep-blue xs:font-semibold z-20
                before:content-brush before:absolute before:-left-[25px] before:-top-[70px]
                before:z-[-1]"
            >
              Raza
            </span>
          </p>
          <p className="mt-10 mb-7 text-base text-center md:text-start">
          Driven by a passion for coding and design, I’m a self-taught front-end developer who thrives on turning challenges into opportunities. With a commitment to continuous learning, I’ve built a solid foundation in creating dynamic, user-centered web applications.          </p>
        </motion.div>
        {/* Call to Actions */}
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            className="bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold
            hover:bg-blue hover:text-white transition duration-500"
            href="#contact"
            onClick={() => setSelectedPage("contact")}
          >
            Contact Me
          </AnchorLink>
          <AnchorLink
            className="rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5"
            href="#contact"
            onClick={() => setSelectedPage("contact")}
          >
            <div
              className="bg-deep-blue hover:text-red transition duration-500 w-full h-full flex
            items-center justify-center font-playfair px-10"
            >
              Let's Talk
            </div>
          </AnchorLink>
        </motion.div>
        {/* Social Media Links */}
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMediaIcons />
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;
