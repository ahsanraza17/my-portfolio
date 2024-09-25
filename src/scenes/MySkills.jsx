import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const MySkills = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <section id="skills" className=" pb-48 pt-16">
      {/* Header and Image Section */}
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            My <span className="text-red">Skills</span>
          </p>
            <LineGradient width="1/3" />
          <p className="mt-10 mb-7">
          Mastering the art of front-end development, I leverage HTML, CSS, JavaScript, and React to build
          seamless, high-performing web applications that captivate users.
          </p>
        </motion.div>

        <div className="mt-16 md:mt-0">
          {isAboveMediumScreens ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
                before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
            >
              <img
                src="./images/skills-image.png"
                className="z-10"
                alt="Skills"
              />
            </div>
          ) : (
            <img
              src="./images/skills-image.png"
              className="z-10"
              alt="Skills"
            />
          )}
        </div>
      </div>

      {/* Skills */}
      <div className="md:flex md:justify-between mt-16 gap-32">
        {/* Experience */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">01</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Experience
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1] " />
          </div>
          <p className="mt-5">
          As a self-taught front-end developer, I’ve honed my skills through hands-on projects and
          open-source contributions. My focus on practical learning drives my ability to create
          impactful web applications.
          </p>
        </motion.div>

        {/* Inovative */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">02</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Inovative
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1] " />
          </div>
          <p className="mt-5">
          Driven by creativity and curiosity, I strive to bring innovative solutions to the
          forefront of front-end development, transforming ideas into engaging and cutting-edge
          user experiences.
          </p>
        </motion.div>

        {/* Imaginative */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">03</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Imaginative
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1] " />
          </div>
          <p className="mt-5">
          Driven by a boundless imagination, I transform creative ideas into visually stunning
          and functionally innovative web experiences, pushing the limits of conventional design
          to captivate and engage users.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MySkills;
