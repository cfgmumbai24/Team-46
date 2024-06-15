import Link from "next/link";

const Footer = () => {
  return (
    <div className="container px-4">
      <div className="flex flex-col md:flex-row items-start justify-between gap-10 mb-16">
        <div className="w-full md:max-w-[420px]">
          <h1>WHAT WE DO.</h1>
          <p className="font-medium text-black  mt-6 dark:drop-shadow-[0_0_0.3rem_#2b15ed] dark:invert">
            Vowels of the People Association aka VOPA provides Joyous,
            meaningful education with self-respect and equal opportunity.
            <br></br>
            We engage mainly in three types of interventions as follows.
          </p>
        </div>
        <div className="w-full md:max-w-[650px] flex flex-col md:flex-row justify-between gap-10">
          <div>
            <p className="text-xl font-semibold mb-[30px]">Features</p>
            <ul className="flex flex-col gap-5 text-secondary-foreground">
              <li>Voice Activation</li>
              <li>Workflow automation</li>
              <li>Interactive Engagement</li>
              <li>Data visualization</li>
              <li>Document Analysis</li>
              <li>Information Gap Analysis</li>
            </ul>
          </div>
          <div>
            <p className="text-xl font-semibold mb-[30px]">Members</p>
            <ul className="flex flex-col gap-5 text-secondary-foreground">
              <li>Prafulla S</li>
              <li>Rutuja J</li>
              <li>Ninad K</li>
              <li>Pankaj S</li>
              <li>Dr. Pratima K</li>
              <li>Amol K</li>
              <li>Mehar S</li>
              <li>And Many more...</li>
            </ul>
          </div>
        </div>
      </div>

      <p className="text-lg text-secondary-foreground p-6 text-center">
        Made with care, Team We7 ❤️.
      </p>
    </div>
  );
};

export default Footer;
