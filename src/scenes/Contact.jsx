import LineGradient from "../components/LineGradient";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

const Contact = () => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section id="contact" className="py-48">
      {/* Headings */}
      <motion.div
        className="flex justify-center md:justify-end w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-yellow">CONTACT ME</span> TO GET STARTED
          </p>
          <div className="flex justify-center md:justify-end my-5">
            <LineGradient width="w-1/2" />
          </div>
        </div>
      </motion.div>
      {/* Form & Image */}
      <div className="md:flex md:justify-between gap-16 mt-8">
        <motion.div
          className="basis-1/2 flex justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <img src="/images/message.svg" alt="Contact" className="md:w-11/12 xs:w-2/5" />
        </motion.div>

        <motion.div
          className="basis-1/2 mt-10 md:mt-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <form 
          target="_blank" 
          onSubmit={onSubmit} 
          action="https://formsubmit.co/a14e2f1918b9331d570279bf0741ca13"
          method="POST"
          >

            <input
              className="w-full bg-blue font-semibold placeholder-opaque-black p-3 outline-none"
              type="text"
              placeholder="NAME"
              {...register("name", {
                required: true,
                maxLength: 100,
              })}
            />
            {errors.name && (
              <p className="text-red mt-1">
                {errors.name.type === "required" && "This Field is Required."}
                {errors.name.type === "maxLength" && "Max Length is 100 Char."}
              </p>
            )}

            <input
              className="w-full bg-blue font-semibold placeholder-opaque-black p-3 outline-none mt-5"
              type="email"
              placeholder="EMAIL"
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
            />
            {errors.email && (
              <p className="text-red mt-1">
                {errors.email.type === "required" && "This Field is Required."}
                {errors.email.type === "pattern" && "Invalid Email Address"}
              </p>
            )}

            <textarea
              className="w-full bg-blue font-semibold placeholder-opaque-black p-3 outline-none mt-5"
              type="text"
              placeholder="MESSAGE"
              rows= "4"
              cols="50"
              {...register("message", {
                required: true,
                maxLength: 2000,
              })}
            />
            {errors.message && (
              <p className="text-red mt-1">
                {errors.message.type === "required" && "This Field is Required."}
                {errors.message.type === "maxLength" && "Max Length is 2000 char"}
              </p>
            )}

            <button
            type="submit"
            className="p-5 bg-yellow font-semibold text-deep-blue mt-5 hover:bg-red
            hover:text-white transition duration-500"
            >
              SEND ME A MESSAGE
            </button>

          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
