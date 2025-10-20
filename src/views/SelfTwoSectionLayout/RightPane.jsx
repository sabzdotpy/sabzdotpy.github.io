import { IoMdCode } from "react-icons/io";
import { MdOutlineDesktopWindows } from "react-icons/md";
import { LuServer, LuDatabase, LuCloud } from "react-icons/lu";
import { LiaToolsSolid } from "react-icons/lia";
import { FaMobileScreen, FaRegBuilding } from "react-icons/fa6";


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

function ExperienceCard({ title, company, time, description, companyIcon }) {

	return (
		<>

			<div className="experienceCard w-full border-l-2 border-(--color-primary)/30 p-3 pt-1.5 mb-6 relative">
				<div className="ball size-3 bg-(--color-primary) absolute top-3.5 -left-1.75 rounded-xs rotate-45 "></div>

				<div className="content">
					<div className="flex justify-between items-center">
						<span className="title font-bold text-xl">{title}</span>
						<span className="time text-sm text-(--color-text)/40">{time}</span>
					</div>
					<div className="flex font-medium justify-start items-center gap-0.5 text-(--color-text)/70 mb-2">
						{companyIcon || <FaRegBuilding size={"13px"} />}
						{company}
					</div>
					<div className="text-(--color-text)/60 text-sm">
						{description}
					</div>
				</div>
			</div>

		</>
	)
}

function EducationCard({ degree, institution, time, description }) {
	return (
		<>
			<div className="educationCard w-full border-l-2 border-(--color-primary)/30 p-3 pt-1.5 mb-6 relative">
				<div className="ball size-3 bg-(--color-primary) absolute top-3.5 -left-1.75 rounded-full "></div>
				<div className="content">
					<div className="flex justify-between items-center">
						<span className="degree font-bold text-xl">{degree}</span>
						<span className="time text-sm text-(--color-text)/40">{time}</span>
					</div>
					<div className="institution font-medium text-(--color-text)/70 mb-2">
						{institution}
					</div>
					<div className="text-(--color-text)/60 text-sm">
						{description}
					</div>
				</div>
			</div>
		</>
	)
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
              <div className="skills  grid grid-cols-2 gap-x-8 gap-y-4">
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
				description={"Led development of microservices architecture, 40% improvement in system performance."}
				time={"Mar 2025 - Present"}
			  />

			  <ExperienceCard 
			  	title={"Contract Based Freelance Developer"}
				company={"Aurora iTech"}
				description={"Led development of microservices architecture, 40% improvement in system performance."}
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
				description={"Relevant Coursework: Computer Networks, OOPs with Java, Software Contruction and Management"}
			  />
            </div>
          </section>

          <div className="divider my-8 h-0.25 w-full bg-(--color-primary) opacity-30"></div>

		  <section>

				<div className="header font-bold text-xl mb-4">Projects</div>
				<div className="content text-[1rem]! text-(--color-text)/80">
				I'm a software engineer with hands-on experience in building
				scalable systems, AI-powered platforms, and full-stack
				applications. I enjoy solving complex problems, leading teams, and
				turning ideas into products.
				</div>

			</section>

          <div className="divider my-8 h-0.25 w-full bg-(--color-primary) opacity-30"></div>



        </div>
      </div>
    </>
  );
}
