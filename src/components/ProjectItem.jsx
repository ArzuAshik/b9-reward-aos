import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faCheckCircle, faGlobeAsia } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ProjectItem({
  title,
  thumbnail,
  shortDescription,
  description,
  repoLink,
  liveLink,
  features,
  index,
}) {
  return (
    <div className="grid grid-cols-2  gap-8 bg-gradient-to-l to-slate-100 from-fuchsia-300 p-4 rounded-xl shadow-lg">
      <div className="max-h-[450px] overflow-hidden rounded-xl">
        <img
          className="w-full h-full object-cover object-top"
          src={thumbnail}
          alt={title}
        />
      </div>
      <div className="flex flex-col justify-center">
        <h1
          className={`text-3xl font-bold font-satisfy ${
            index % 2 === 0 ? "text-fuchsia-500" : "text-black"
          }`}
        >
          {title}
        </h1>
        <h6
          className={` my-2 ${
            index % 2 === 0 ? "text-fuchsia-400" : "text-black"
          }`}
        >
          {shortDescription}
        </h6>
        <div
          className={`flex gap-4 text-xl ${
            index % 2 === 0 ? "text-fuchsia-500" : "text-black"
          }`}
        >
          <a href={repoLink}>
            <FontAwesomeIcon icon={faGithubSquare} /> Repository
          </a>
          <a href={liveLink}>
            <FontAwesomeIcon icon={faGlobeAsia} /> Live Site
          </a>
        </div>
        <h5
          className={`mt-4 text-2xl ${
            index % 2 === 0 ? "text-fuchsia-500" : "text-black"
          }`}
        >
          Features
        </h5>
        <ul className={index % 2 === 0 ? "text-fuchsia-400" : "text-black"}>
          {features["en"].map((feature, i) => (
            <li key={feature + i}>
              {" "}
              <FontAwesomeIcon className={`mr-2`} icon={faCheckCircle} />{" "}
              {feature}{" "}
            </li>
          ))}
        </ul>
        <h5
          className={`mt-4 text-2xl ${
            index % 2 === 0 ? "text-fuchsia-400" : "text-black"
          }`}
        >
          Description
        </h5>
        <p className={index % 2 === 0 ? "text-fuchsia-400" : "text-black"}>
          {description["en"]}
        </p>
      </div>
    </div>
  );
}
