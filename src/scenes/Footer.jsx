import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="h-64 bg-red pt-10">
      <div className="w-5/6 mx-auto">
        <SocialMediaIcons />
        <div className="md:flex justify-center md:justify-between text-center">
          <p className="font-playfair font-bold text-2xl text-deep-blue">
            Ahsan Raza
          </p>
          <p className="font-playfair text-md text-deep-blue font-semibold">
            &copy;2024 All Rights are Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
