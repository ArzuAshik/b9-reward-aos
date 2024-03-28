// icons
import {
  faFacebookSquare,
  faGithubSquare,
  faLinkedinIn,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faHome,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// info
import educationAndExperience from "../information/educationAndExperience";
import personalInfo from "../information/personalInfo";

export default function Banner() {
  const { grating, name, title, shortDescription, phone, email, address } =
    personalInfo.en;

  const {
    social: { facebook, linkedIn, github, twitter },
  } = personalInfo;

  return (
    <section className="bg-gradient-to-r from-[#766dff] to-[#88f3ff] min-h-svh flex items-center justify-center">
      <div className="bg-white max-w-[1100px] mx-auto  p-8 py-12 rounded-3xl shadow-lg grid grid-cols-7 gap-7">
        <div className="p-3 col-span-3">
          <img data-aos="zoom-in" data-aos-duration="2000" className="rounded-full" src="/profile-pic.jpg" alt="" />
        </div>
        <div className="flex flex-col justify-center col-span-4">
          <div className="intro">
            <h6 data-aos="fade-left" data-aos-duration="1000" data-aos-delay="1000">{grating}</h6>
            <h1 data-aos="fade-left" data-aos-duration="1000" data-aos-delay="1200" className="text-5xl font-satisfy">{name}</h1>
            <h4 data-aos="fade-left" data-aos-duration="1000" data-aos-delay="1500" className="my-2 font-heebo">
              {title} <span>@</span>{" "}
              {educationAndExperience.experience[0].company}
            </h4>
            <p data-aos="fade-left" data-aos-duration="1000" data-aos-delay="1800">{shortDescription}</p>
          </div>

          <ul className="text-xl my-4 text-gray-500">
            <li data-aos="fade-left" data-aos-duration="1000" data-aos-delay="2300">
              <FontAwesomeIcon icon={faPhoneAlt} /> {phone}
            </li>
            <li data-aos="fade-left" data-aos-duration="1000" data-aos-delay="2400">
              <FontAwesomeIcon icon={faEnvelope} /> {email}
            </li>
            <li data-aos="fade-left" data-aos-duration="1000" data-aos-delay="2500">
              <FontAwesomeIcon icon={faHome} /> {address}
            </li>
          </ul>
          <div className="social">
            <ul className="flex gap-4 text-3xl text-gray-400">
              <li data-aos="fade-up" data-aos-delay="2800" data-aos-duration="1000" className="hover:text-fuchsia-400 duration-250 transition-all text-gray-400">
                <a href={facebook} target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faFacebookSquare} />
                </a>
              </li>
              <li data-aos="fade-up" data-aos-delay="3000" data-aos-duration="1000" className="hover:text-fuchsia-400 duration-250 transition-all text-gray-400">
                <a href={linkedIn} target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
              </li>
              <li data-aos="fade-up" data-aos-delay="3200" data-aos-duration="1000" className="hover:text-fuchsia-400 duration-250 transition-all text-gray-400">
                <a href={github} target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faGithubSquare} />
                </a>
              </li>
              <li data-aos="fade-up" data-aos-delay="3400" data-aos-duration="1000" className="hover:text-fuchsia-400 duration-250 transition-all text-gray-400">
                <a href={twitter} target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faTwitterSquare} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
