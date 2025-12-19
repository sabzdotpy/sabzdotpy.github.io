import CLink from "../components/CLink";
import "../styles/freelance.css";

export default function Freelance() {
  return (
    <div className="overflow-y-auto p-4 h-screen max-w-screen flex justify-center items-center overflow-x-hidden pt-50 md:pt-0">
      <div className="w-screen font-display items-center flex flex-col justify-start h-max">
        <div className="freelance-title text-6xl mb-10 font-display font-light italic w-max text-amber-300">
          Freelance
        </div>
        <div className="mb-6 text-2xl">Hi. Full disclosure.</div>
        <div className="w-4/5 mx-auto md:w-1/2 font-serif text-xl text-center">
          I'm a freelance developer available for hire. If you're interested in
          working together, send me a message and we can discuss your project further.
          <br />
          <br />
          Ignore the fact that this is probably the worst freelance page you've
          ever seen. Rest assured, you're in good hands, I have a strong
          portfolio and a track record of delivering high-quality work.
          <br />
          <br />
          Send me an email at{" "}
          <CLink to={"mailto:sabari.codes@gmail.com"}>
            sabari.codes@gmail.com
          </CLink>
          .
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
            <CLink to={"/contact"}>Contact</CLink>
          </div>
        </div>
      </div>
    </div>
  );
}
