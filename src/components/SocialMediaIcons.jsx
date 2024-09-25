

const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
      href="https://www.linkedin.com/in/ahsan-raza-5210a4181?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
      className="hover:opacity-50 transition duration-500"
      target="_blank"
      rel="noreferrer">
        <img src="./images/linkedin.png" alt="linkedin-link" />
      </a>

      <a
      href="https://www.facebook.com/profile.php?id=100003586511684&mibextid=ZbWKwL"
      className="hover:opacity-50 transition duration-500"
      target="_blank"
      rel="noreferrer">
        <img src="./images/facebook.png" alt="facebook-link" />
      </a>

      <a
      href="https://www.instagram.com/ahsan_hafeez1?igsh=bjc0emsweDR5MTV6"
      className="hover:opacity-50 transition duration-500"
      target="_blank"
      rel="noreferrer">
        <img src="./images/instagram.png" alt="instagram-link" />
      </a>

      <div
      className="hover:opacity-50 transition duration-500"
      target="_blank"
      rel="noreferrer">
        <img src="./images/twitter.png" alt="twitter-link" />
      </div>
    </div>
  )
}

export default SocialMediaIcons;
