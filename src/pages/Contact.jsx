import CLink from "../components/CLink";
import "../styles/contact.css";

export default function Contact() {
  return (
    <div className="overflow-y-auto p-4 h-screen max-w-screen flex justify-center items-center overflow-x-hidden pt-50 md:pt-0">
      <div className="w-screen font-display items-center flex flex-col justify-start h-max">
        <div className="contact-title text-6xl mb-6 font-display font-light italic w-max text-amber-300">
          Contact
        </div>
        <div className="mb-12 text-2xl">Hi. Below are ways to reach me.</div>
        <div className="w-4/5 mx-auto md:w-1/2 font-serif text-xl text-center">
            <ul className="space-y-2">
                <li>Email: <CLink target={"_blank"} to={"mailto:sabari.codes@gmail.com"}>sabari.codes@gmail.com</CLink></li>
                <li>LinkedIn: <CLink target={"_blank"} to={"https://www.linkedin.com/in/sabari01"}>linkedin.com/in/sabari01</CLink></li>
            </ul>
        </div>

        <br />
        <br />
        <br />

        <div className="linknav pb-30 md:pb-0">
          <div className="flex gap-5 justify-center items-center mb-4">
            <span className="bar"></span>
            <span className="text-xl font-alt font-extralight tracking-widest">
              NAVIGATION
            </span>
            <span className="bar"></span>
          </div>
          <div className="w-1/2 mx-auto font-serif font-light text-xl italic text-(--color-text)/70 flex gap-5 justify-center items-center">
            <CLink to={"/"}>Home</CLink>
            <CLink to={"/freelance"}>Freelance</CLink>
          </div>
        </div>
      </div>
    </div>
  );
}
