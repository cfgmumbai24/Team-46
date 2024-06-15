import Link from "next/link";


const Footer = () => {
  return (
    <div className="container px-4">
      <div className="flex flex-col md:flex-row items-start justify-between gap-10 mb-16">
        <div className="w-full md:max-w-[420px]">       
          <p className="font-medium text-black  mt-6 dark:drop-shadow-[0_0_0.3rem_#2b15ed] dark:invert">
          Product is a revolutionary tool designed to streamline the sales process by gathering customer data and generating tailored sales proposals efficiently.
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
              <li>Surabhi Waingankar</li>
              <li>Shreya Anand</li>
              <li>Preksha Jain</li>
              <li>Hardik Garg</li>
              <li>Prashant Verma</li>
              <li>Twinkle Dhingra</li>
              <li>Aryan Singh</li>
            </ul>
          </div>
        </div>
      </div>

      <p className="text-lg text-secondary-foreground p-6 text-center">
        Made with care, Team _____ ❤️.
      </p>
    </div>
  );
};

export default Footer;