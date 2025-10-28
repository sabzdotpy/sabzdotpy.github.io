import { IoMdCode } from "react-icons/io";
import { MdOutlineDesktopWindows } from "react-icons/md";
import {
  LuServer,
  LuDatabase,
  LuCloud,
  LuSendHorizontal,
} from "react-icons/lu";
import { LiaToolsSolid } from "react-icons/lia";
import { FaMobileScreen, FaRegBuilding } from "react-icons/fa6";

import CLink from "../../components/CLink";

function SkillPill({ skill }) {
  return (
    <>
      <div className="pill max-w-max inline-block bg-(--color-primary)/10 text-(--color-primary) px-3 py-1 rounded-full text-xs font-medium border border-(--color-primary)/20">
        {skill}
      </div>
    </>
  );
}

function SkillGroup({ icon, topic, skills }) {
  return (
    <>
      <div className="skillGroup mb-4">
        <div className="topic font-semibold text-md mb-2 flex justify-start items-center gap-1.5">
          <span>{icon}</span>
          <span className="-translate-y-0.5">{topic}</span>
        </div>
        <div className="skills flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <SkillPill key={index} skill={skill} />
          ))}
        </div>
      </div>
    </>
  );
}

function ExperienceCard({ title, company, time, description, companyIcon, latest }) {
  return (
    <>
      <div className="experienceCard w-full border-l-2 border-(--color-primary)/30 p-3 pt-1.5 relative">

        <div className={`ball size-3 ${latest ? "bg-(--color-primary)" : "bg-(--color-primary)/80"} ${latest ? "" : "-scale-75"} absolute top-3.5 -left-1.75 rounded-xs rotate-45 `}></div>

        <div className="content">
          <div className="flex justify-between items-center">
            <span className="title font-bold text-xl">{title}</span>
            <span className="time text-sm text-(--color-text)/60">{time}</span>
          </div>
          <div className="flex font-medium justify-start items-center gap-0.5 text-(--color-text)/80 mb-2">
            {companyIcon || <FaRegBuilding size={"13px"} />}
            {company}
          </div>
          <div className="text-(--color-text)/70 text-sm text-justify md:text-left whitespace-pre-line">{description}</div>
        </div>
      </div>
    </>
  );
}

function EducationCard({ degree, institution, time, description }) {
  return (
    <>
      <div className="educationCard w-full border-l-2 border-(--color-primary)/30 p-3 pt-1.5 mb-6 relative">
        <div className="ball size-3 bg-(--color-primary) absolute top-3.5 -left-1.75 rounded-full "></div>
        <div className="content">
          <div className="flex justify-between items-center">
            <span className="degree font-bold text-xl">{degree}</span>
            <span className="time text-sm text-(--color-text)/60">{time}</span>
          </div>
          <div className="institution font-medium text-(--color-text)/80 mb-2">
            {institution}
          </div>
          <div className="text-(--color-text)/70 text-sm whitespace-pre-line">{description}</div>
        </div>
      </div>
    </>
  );
}

export default function RightPane({ className }) {
  return (
    <>
      <div
        className={`rightPaneContentContainer ${className} mt-30 flex-col overflow-y-auto`}
      >
        <div className="rightPaneContent w-10/12 mx-auto max-h-max">
          <section>
            <div className="header font-bold text-xl mb-4">About Me</div>
            <div className="content text-[1rem]! text-(--color-text)/80">
              I'm a software engineer with hands-on experience in building
              scalable systems, AI-powered platforms, and full-stack
              applications. I enjoy solving complex problems, leading teams, and
              turning ideas into products.
            </div>
          </section>

          <div className="divider my-8 h-0.25 w-full bg-(--color-primary) opacity-30"></div>

          <section>
            <div className="header font-bold text-xl mb-4">Core Skills</div>

            <div className="content text-[1rem]! text-(--color-text)/80 space-y-2">
              <div className="skills  grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                <SkillGroup
                  icon={<IoMdCode />}
                  topic={"Languages"}
                  skills={["Java", "Python", "Javascript", "TypeScript", "C#"]}
                />

                <SkillGroup
                  icon={<MdOutlineDesktopWindows />}
                  topic={"Frontend"}
                  skills={[
                    "React",
                    "Angular",
                    "Vue",
                    "HTML",
                    "CSS",
                    "TailwindCSS",
                    "SASS",
                  ]}
                />

                <SkillGroup
                  icon={<LuServer />}
                  topic={"Backend"}
                  skills={["Spring Boot", "Express", "Django", "Flask"]}
                />

                <SkillGroup
                  icon={<LuDatabase />}
                  topic={"Databases"}
                  skills={["PostgreSQL", "MySQL", "MongoDB", "Redis"]}
                />

                <SkillGroup
                  icon={<LuCloud />}
                  topic={"DevOps & Cloud"}
                  skills={["GCP", "AWS", "Docker", "CI/CD"]}
                />

                <SkillGroup
                  icon={<LiaToolsSolid />}
                  topic={"Tools & Platforms"}
                  skills={["Git", "JIRA", "Linux", "VS Code"]}
                />

                <SkillGroup
                  icon={<FaMobileScreen />}
                  topic={"Mobile"}
                  skills={["Flutter"]}
                />
              </div>
            </div>
          </section>

          <div className="divider my-8 h-0.25 w-full bg-(--color-primary) opacity-30"></div>

          <section>
            <div className="header font-bold text-xl mb-4">Experience</div>
            <div className="content text-[1rem]! text-(--color-text)/80">
              <ExperienceCard
                title={"SDE Intern"}
                company={"Infoziant"}
                description={
                  "Developed secure full-stack systems with React and Express.js, implementing RBAC, JWT authentication, and SQL protection. Optimized backend performance, resolving 100+ issues and reducing response latency by 40%."
                }
                time={"Mar 2025 - Present"}
                latest
              />

              <ExperienceCard
                title={"Contract Based Freelance Developer"}
                company={"Aurora iTech"}
                description={
                  "Assisted in developing an e-commerce platform, integrating payment systems and dynamic pricing based on product attributes."
                }
                time={"Aug 2022 - Nov 2022"}
              />
            </div>
          </section>

          <div className="divider my-8 h-0.25 w-full bg-(--color-primary) opacity-30"></div>

          <section>
            <div className="header font-bold text-xl mb-4">Education</div>
            <div className="content text-[1rem]! text-(--color-text)/80">
              <EducationCard
                degree={"B.Tech in Information Technology"}
                institution={"Kalasalingam University"}
                time={"Aug 2022 - Aug 2026"}
                description={
                  `Relevant Coursework: Computer Networks, OOPs with Java, Software Contruction and Management
                  CGPA: 9.1/10
                  `
                }
              />
            </div>
          </section>

          <div className="divider my-8 h-0.25 w-full bg-(--color-primary) opacity-30"></div>

          <section>
            <div className="header font-bold text-xl mb-4">Projects</div>
            <div className="content text-[1rem]! text-(--color-text)/80">
              This section will be furnished soon. Please visit my{" "}
              <CLink to="https://github.com/sabzdotpy" target="_blank">
                GitHub
              </CLink>{" "}
              profile to explore my projects.
            </div>
          </section>

          <div className="divider my-8 h-0.25 w-full bg-(--color-primary) opacity-30"></div>

          <section>
            <div className="header font-bold text-xl">Get in Touch!</div>
            <div className="sub mb-4 text-sm text-(--color-text)/70">
              I'm always open to discussing new opportunities, collaborations,
              or just a friendly chat about technology.
            </div>
            <div className="contactForm content text-[1rem]! text-(--color-text)/80 my-6">
              <form
                action={(e) => {
                  e.preventDefault();
                  alert("Form action is currently disabled.");
                }}
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Form submission is currently disabled.");
                }}
              >
                <div className="flex flex-col gap-4">
                  <div className="flex gap-4">
                    <div className="flex-col flex-1">
                      <label htmlFor="name">Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Your Name"
                        required
                        className="mt-1 w-full border border-(--color-button-border) bg-(--color-background) text-(--color-text) px-4 py-2 focus:outline-none focus:border-(--color-primary) transition-colors"
                      />
                    </div>

                    <div className="flex-col flex-1">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Your Email"
                        required
                        className="mt-1 w-full border border-(--color-button-border) bg-(--color-background) text-(--color-text) px-4 py-2 focus:outline-none focus:border-(--color-primary) transition-colors"
                      />
                    </div>
                  </div>

                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    placeholder="Your Message"
                    required
                    className="w-full border border-(--color-button-border) bg-(--color-background) text-(--color-text) px-4 py-2 focus:outline-none focus:border-(--color-primary) transition-colors"
                  ></textarea>

                  <button
                    type="submit"
                    className="float-right ml-auto self-start bg-(--color-primary) text-(--color-background) px-6 py-2 mt-6 rounded-full hover:bg-(--color-primary-dark) transition-colors"
                  >
                    Send Message{" "}
                    <LuSendHorizontal className="inline mb-1 ml-1" />
                  </button>
                </div>
              </form>
            </div>
          </section>

          <div className="divider my-8 h-0.25 w-full bg-(--color-primary) opacity-30"></div>
        </div>
      </div>
    </>
  );
}
