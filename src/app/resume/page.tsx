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
                jjcx.dev
              </a>
            </div>
            <div className="text-sm">Grimsby, ON</div>
          </div>
          <div className=" py-4 font-bold uppercase underline">
            Summary
          </div>
          <div className=" text-sm hover:bg-secondary hover:rounded-md p-4">
            <div>• 19 years of intermittent web design experience</div>
            <div>
              • 1+ year with ReactJS, Tailwind, TypeScript, Figma, GitHub,
              Vercel
            </div>
            <div>• 3+ years with Wordpress, JavaScript</div>
            <div>• 5+ years various CMS systems</div>
            <div>• 10+ years with HTML, CSS</div>
          </div>
        </section>

        <section>
          <div className=" pt-4 font-bold uppercase underline">
            Professional Experience
          </div>
        </section>
        <ResumeWork
          employer="Freelance"
          jobTitle="Front End Developer"
          location="Toronto, ON"
          summary="Built custom WebApps for clients, as well as self-driven projects"
          dates="10/2022 - Present"
        />
        <ResumeProject
          client="VimKeyboard"
          description="Vim Motions learning aid"
          bullets={[
            "UI/UX design",
          ]}
        />
        <ResumeProject
          client="Sharaoke"
          description="Web-based Karaoke App"
          bullets={[
            "UI/UX design, client management",
            "YouTube V3, Web Audio and OpenAI API integration",
            "System Audio integration",
          ]}
        />
        <ResumeProject
          client="Hue-Rotate"
          description="A tool for calcualting hue-rotate for SVGs"
          bullets={["UI/UX design"]}
        />
        <ResumeProject
          client="Seminar on the Seas"
          description="Responsive web app"
          bullets={[
            "Project management, UI/UX design, client management",
            "Mobile-first design",
            "Future implementations will include auth, and database for user sections",
          ]}
        />
        <ResumeProject
          client="PixlPal"
          description="macOS color picker app, designed to help devs and other content creators"
          bullets={[
            "Built entirely from scratch, with no previous experience in SwiftUI/XCode",
            "Successfully accepted on the Apple Store",
          ]}
        />
        <ResumeWork
          employer="Epic Toronto Camera Rentals Inc."
          jobTitle="Co-Owner & Frontend Developer"
          location="Toronto, ON"
          summary="Camera and film equipment rental house"
          dates=" 01/2015 – 07/2019"
        />
        <ResumeProject
          client="Website"
          description="Online inventory of rental equipment with booking capabilities"
          bullets={[
            "Project management, UI/UX design, content management",
            "Successfully integrated Booqable to manage equipment bookings and calendars",
          ]}
        />
        <ResumeWork
          employer="Ethereum Films Ltd."
          jobTitle="Co-Owner & Frontend Developer"
          location="Toronto, ON"
          summary="Film production company."
          dates=" 06/2012 – 07/2019"
        />
        <ResumeProject
          client="Website"
          description="Online portfolio of produced works"
          bullets={["Project management, UI/UX design, content management"]}
        />
        <section>
          <div className=" pt-4 font-bold uppercase underline">
            Work Experience
          </div>
          <div className="flex flex-col md:flex-row w-full md:gap-16">
            <div className="flex md:w-1/2 flex-col">
              <ResumeWorkExperience
                employer="Pure Muscle Radio"
                position="Producer & Technical Director"
                location="Burlington, ON"
                dates="2023"
              />
              <ResumeWorkExperience
                employer="The Deli (HeydSaffer)"
                position="Production Manager"
                location="Toronto, ON"
                dates="2020 - 2022"
              />
              <ResumeWorkExperience
                employer="The Deli (HeydSaffer)"
                position="Production Coordinator"
                location="Toronto, ON"
                dates="2019 - 2020"
              />
            </div>
            <div className="flex md:w-1/2 flex-col">
              <ResumeWorkExperience
                employer="Freelance"
                position="Director & Cinematographer"
                location="Toronto, ON"
                dates="2008 - 2019"
              />
              <ResumeWorkExperience
                employer="Toronto Film School"
                position="Instructor, Film Production"
                location="Toronto, ON"
                dates="2013 - 2016"
              />
            </div>
          </div>
        </section>
        <section>
          <div className=" py-4 font-bold uppercase underline">
            Technical Skills
          </div>
          <div className=" hover:bg-secondary hover:rounded-md p-4 ">
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
          <div className=" pt-4 font-bold uppercase underline">
            Certificates
          </div>
          <ResumeEducation
            school="Udemy"
            program="Colt Steele: Web Developer Bootcamp"
            dates="2022"
            location="Online"
          />
        </section>
        <section>
          <div className=" pt-4 font-bold uppercase underline">
            Education
          </div>
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
      </section>
    </main>
  );
}
