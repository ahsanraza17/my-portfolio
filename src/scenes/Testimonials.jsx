import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const Testimonials = () => {
  const testimonialsStyles = `mx-auto relative max-w-[400px] h-[350px] flex flex-col justify-end
    p-16 mt-48 before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2`;
  return (
    <section id="testimonials" className=" pb-48 pt-48">
      {/* Headings */}
      <motion.div
        className="md:w-1/3 text-center md:text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -100 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <p className="font-playfair font-semibold text-4xl mb-5 text-red">
          TESTIMONIALS
        </p>
        <div className="flex justify-center md:justify-start mt-10">
          <LineGradient width="w-3/5" />
        </div>
        <p className="mt-10 mb-7">
        Testimonials provide valuable insights into my dedication and skill, highlighting
        how my work positively impacts clients and users alike.
        </p>
      </motion.div>

      {/* TESTIMONIALS */}
      <div className="md:flex md:justify-between gap-8">
        <motion.div
          className={`bg-blue ${testimonialsStyles} before:content-person1`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
            <p className="font-playfair text-6xl ">“</p>
            <p className="text-center text-xl">
            Amazing work! Delivered exactly what I wanted, and the website looks fantastic. Highly recommend!
            </p>
        </motion.div>

        <motion.div
          className={`bg-red ${testimonialsStyles} before:content-person2`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
            <p className="font-playfair text-6xl ">“</p>
            <p className="text-center text-xl">
            Great communication and attention to detail. The final product exceeded my expectations!
            </p>
        </motion.div>

        <motion.div
          className={`bg-yellow ${testimonialsStyles} before:content-person3`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4 ,duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
            <p className="font-playfair text-6xl ">“</p>
            <p className="text-center text-xl">
            Super fast and professional! The website is sleek and responsive. Will definitely hire again!
            </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
