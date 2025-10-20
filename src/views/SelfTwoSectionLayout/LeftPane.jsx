import logo from "../../assets/headshot.png";
import "./SelfTwoSectionLayout.scss";

import { IoLocationOutline, IoLogoLinkedin } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

import CLink from "../../components/CLink";
import { Link } from "react-router-dom";


export default function LeftPane({ className }) {
  const greetings = [
    "Hello! 👋",
    "Hey! 👋",
    "Welcome! 🙏",
    "Hi there! 👋",
    "Wazzuup! 😎",
  ];

  return (
    <>
      <div
        className={`
            leftPaneContent 
            ${className} 
            h-full 
            bg-transparent
            md:bg-white/2
            flex 
            flex-col
            justify-center
            items-center
            gap-0.5
            text-center
            box-border
            border-r-1
            border-dashed
            border-(--color-primary)/25
            mt-6
        `}
      >
        <h4 className="mb-6">
          {greetings[Math.floor(Math.random() * greetings.length)]}
        </h4>

        <div className="imageContainer relative h-42 w-42 rounded-full flex justify-center items-center overflow-hidden">
          <img
            src={logo}
            alt="Headshot"
            className="h-40 w-40 rounded-full object-cover relative z-10"
          />
        </div>
        <h2 className="m-0 mt-6 mb-0 text-(--color-primary) font-[Playfair_Display]">
          Sabari S
        </h2>
        <h5 className="m-0 font-semibold! w-3/4 text-[1rem]! text-(--color-text)/80">
          Backend Developer / Student
        </h5>

        <div className="divider my-4 h-0.5 w-20 bg-(--color-primary) opacity-20"></div>

        <div className="links flex flex-col gap-2">
          <div>
            <IoLocationOutline className="inline mb-1 mr-1" />
            <span>Chennai, India</span>
          </div>
          <div>
            <CiMail className="inline mb-1 mr-1" />
            <CLink
              to={"mailto:sabari.codes@gmail.com"}
              className={"text-(--color-text)!"}
            >
              sabari.codes@gmail.com
            </CLink>
          </div>
          {/* <div>
                <MdOutlineLocalPhone className="inline mb-1 mr-1" />
                <CLink className={"text-(--color-text)!"} to={"tel:+91 8754605197"}>+91 8754605197</CLink>
            </div> */}
        </div>

        <div className="socials flex gap-2 mt-6 justify-center items-center">
          <Link
            className="text-(--color-text)!"
            to={"https://linkedin.com/in/sabari01"}
            target="_blank"
          >
            <IoLogoLinkedin size={"20px"} />
          </Link>
          <Link
            className="text-(--color-text)!"
            to={"https://github.com/sabzdotpy"}
            target="_blank"
          >
            <FaGithub size={"20px"} />
          </Link>
        </div>
      </div>
    </>
  );
}
