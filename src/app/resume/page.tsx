import ResumeProject from "./components/ResumeProject";
import ResumeEducation from "./components/ResumeEducation";
import ResumeTechSkills from "./components/ResumeTechSkills";
import ResumeWork from "./components/ResumeWork";
import ResumeWorkExperience from "./components/ResumeWorkExperience";

export default function Resume() {
  return (
    <main className="bg-coal w-full max-w-[800px] border-[0.5px] border-secondary">
      <section className="w-full p-4 md:p-12 bg-coal">
        <section>
          <div className=" flex w-full flex-col md:items-center">
            <div className="text-xl font-semibold uppercase">
              Justin Chambers
            </div>
            <div className="text-sm">
              <a
                className="hover:text-yellow-400"
                href="mailto:j@jjcx.dev?subject=Greetings from the motherhship!"
              >
                j@jjcx.dev
              </a>{" "}
              |{" "}
              <a className="hover:text-yellow-400" href="tel:416-455-8684">
                416.455.8684
              </a>{" "}
              |{" "}
              <a className="hover:text-yellow-400" href="https://www.jjcx.dev">
                www.jjcx.dev
              </a>
            </div>
            <div className="text-sm">Grimsby, ON</div>
          </div>
          <div className=" py-4 font-bold uppercase underline">
            Summary
          </div>
          <div className=" text-sm hover:bg-secondary hover:rounded-md p-4">
          Experienced Front-End Developer with expertise in HTML, CSS, JavaScript, and React, complemented by a strong background in project management and creative problem-solving from a 15-year film industry career. Demonstrated capability in Next.js and API integrations. Dedicated to continuous learning and delivering high-quality, user-centric web solutions. Known for my ability to quickly adapt to new technologies and efficiently manage multiple projects.
          </div>
        </section>

        <section>
          <div className=" pt-4 font-bold uppercase underline">
            Professional Experience
          </div>
        </section>
        <div className="py-2">
        <ResumeWork
          employer="DataAnnotation"
          jobTitle="Data Annotation Specialist (Freelance)"
          location="Remote"
          dates=" 08/2023 – Present"
        />
        <ResumeProject
          bullets={[
            "Executed high-quality data labeling to train machine learning models, significantly contributing to the enhancement of AI systems.",
          ]}
          />
          <ResumeProject
          bullets={[
            "Selected and managed diverse projects, ensuring completion within tight deadlines while maintaining high accuracy and quality standards.",
          ]}
          /><ResumeProject
          bullets={[
            "Effectively managed a self-directed work schedule, balancing multiple projects and personal commitments to consistently meet deadlines.",
          ]}
          />
        </div>
        <div className="py-2">
        <ResumeWork
          employer="Freelance"
          jobTitle="Front End Developer"
          location="Toronto, ON"
          dates="10/2022 - Present"
        />
          <ResumeProject
          bullets={["Launched PixlPal, a macOS colour picker app, achieving a successful debut on the Apple Store. Demonstrated proficiency in software development and project management. Quickly learned and applied SwiftUI."]}
        />
        <ResumeProject
          bullets={["Developed web applications using Next.js, integrating Google APIs, YouTube V3, Web Audio, and OpenAI APIs to enhance user interaction and content accessibility. Leveraged Figma for UI/UX design and utilized HTML, CSS, JavaScript, TypeScript, and GitHub for version control."]}
        />
                <ResumeProject
          bullets={["Created a Python tool for web scraping data for a fantasy football league, automating tasks and improving data management."]}
        />
        </div>
                <div className="py-4">
        <ResumeWork
          employer="Production Experience in Film Industry"
          jobTitle="Various Roles"
          location="Toronto, ON"
          dates=" 2008 – 2022"
        />
        <ResumeProject
          bullets={["Directed and managed film production teams, showcasing strong leadership and problem-solving skills."]}
          />
          <ResumeProject
          bullets={["Developed and taught educational programs at Toronto Film School, enhancing course engagement through practical film production techniques and technologies."]}
          /><ResumeProject
          bullets={["Co-Owned and managed business operations for sister companies, Epic Toronto Camera Rentals Inc. and Ethereum Films Ltd. Managed client relations, oversaw business operations, and led the development and UI/UX design of various systems, including an online inventory system for rental equipment and an online portfolio. Integrated Booqable into WordPress for streamlined equipment bookings and calendar management, and directed content strategy that attracted significant investment."]}
          />
          </div>

        <section>
          <div className=" pt-4 font-bold uppercase underline">
            Education
          </div>
          <ResumeEducation
            school="Udemy"
            program="Colt Steele: Web Developer Bootcamp"
            dates="2022"
            location="Online"
          />
          <ResumeEducation
            school="Toronto Film School"
            program="Film Production"
            dates="10/2006 - 12/2007"
            location="Toronto, ON"
          />
          <ResumeEducation
            school="Fanshawe College"
            program="General Arts & Science"
            dates="09/2005 - 05/2006"
            location="London, ON"
          />
          <ResumeEducation
            school="CDI College"
            program="Web Design"
            dates="04/2004 - 08/2004"
            location="Chatham, ON"
          />
        </section>
        <section>
          <div className=" py-4 font-bold uppercase underline">
            Technical Skills
          </div>
          <div className=" hover:bg-secondary hover:rounded-md px-4 py-1 ">
            <ResumeTechSkills
              category="Languages"
              skill="HTML, CSS, JavaScript, TypeScript"
            />
            <ResumeTechSkills category="Frameworks & Libraries" skill="Next.js, React, Shadcn, Tailwind CSS " />
            <ResumeTechSkills category="APIs" skill="Google, OpenAI" />
            <ResumeTechSkills category="Tools" skill="Figma, GitHub" />
          </div>
        </section>
        <section>
          <div className=" py-4 font-bold uppercase underline">
            Additional Skills
          </div>
          <div className=" hover:bg-secondary hover:rounded-md px-4 py-1 ">
            <ResumeTechSkills
              category="Project Management"
              skill="Experience managing large-scale projects with multiple stakeholders."
            />
            <ResumeTechSkills category="UI/UX Design" skill="Extensive experience in designing user-friendly interfaces." />
            <ResumeTechSkills category="Content Management" skill="Proficient in managing content for various platforms." />
            <ResumeTechSkills category="Client Management" skill="Skilled in managing client relationships and project requirements." />
          </div>
        </section>
      </section>
    </main>
  );
}
