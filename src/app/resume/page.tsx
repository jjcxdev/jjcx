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
            Front-End Developer with a solid foundation in web design and development, enhanced by extensive project management and creative problem-solving skills from a 15-year career in the film industry. Proficient in HTML, CSS, JavaScript, React, and various other technologies. Committed to continuous learning and delivering high-quality, user-friendly web solutions.
          </div>
        </section>

        <section>
          <div className=" pt-4 font-bold uppercase underline">
            Professional Experience
          </div>
        </section>
        <div className="py-2">
        <ResumeWork
          employer="Freelance"
          jobTitle="Front End Developer"
          location="Toronto, ON"
          dates="10/2022 - Present"
        />
          <ResumeProject
          bullets={["Built custom web applications for clients and self-driven projects."]}
        />
        <ResumeProject
          client="VimKeyboard"
          bullets={["UI/UX design for a Vim Motions learning aid."]}
        />
                <ResumeProject
          client="Hue-Rotate"
          bullets={["Tool for calculating hue-rotate for SVGs."]}
        />
                <ResumeProject
          client="PixlPal"
          bullets={["macOS color picker app. Designed for developers and content creators. Successfully launched on the Apple Store."]}
        />


        <ResumeProject
          client="Seminar on the Seas"
          bullets={["Responsive web app with a mobile-first design. Managed projects, UI/UX design, and client interactions. Future implementations include authentication and a user database."]}
        />
                <ResumeProject
          client="Sharaoke"
          bullets={["Web-based Karaoke App with YouTube V3, Web Audio, and OpenAI API integration. Managed client interactions and system audio integration."]}

        />
        </div>
                <div className="py-2">
        <ResumeWork
          employer="Epic Toronto Camera Rentals Inc."
          jobTitle="Co-Owner & Frontend Developer"
          location="Toronto, ON"
          dates=" 01/2015 – 07/2019"
        />
        <ResumeProject
          bullets={[
            "Managed projects, UI/UX design, and content for an online inventory of rental equipment with booking capabilities. Integrated Booqable to manage equipment bookings and calendars.",
          ]}
          />
        </div>
                <div className="py-2">
        <ResumeWork
          employer="Ethereum Films Ltd."
          jobTitle="Co-Owner & Frontend Developer"
          location="Toronto, ON"
          dates=" 06/2012 – 07/2019"
        />
        <ResumeProject
          bullets={["Managed projects, UI/UX design, and content for an online portfolio of produced works. Integrated Booqable to manage equipment bookings and calendars."]}
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
          bullets={["Extensive experience as a Producer, Technical Director, Production Manager, and Coordinator. Directed and shot films, managed crews, and oversaw production logistics. Taught film production at Toronto Film School."]}
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
            <ResumeTechSkills category="Technologies" skill="Next.js, React" />
            <ResumeTechSkills category="API" skill="Google, OpenAI" />
            <ResumeTechSkills category="Software" skill="Figma, Jira" />
            <ResumeTechSkills category="Version Control" skill="GitHub" />
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
