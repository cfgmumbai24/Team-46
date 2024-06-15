import React from "react";
// import { Analytics } from '@vercel/analytics/react';
const page = () => {
  return (
    <>
      <section className="">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
            <div className="text-grad text-7xl max-sm:text-4xl font-bold mx-auto text-center leading-snug">
              Coming Soon...
            </div>
            <p className="text-center text-sm max-sm:text-xs">
              Ensuring Right to Quality Education
            </p>
          </div>
          <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
            {/* Pricing Card - Starter */}
            <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow xl:p-8">
              <h3 className="mb-4 text-2xl font-semibold">
                स्पष्टपणे विचार करण्याची कला भाग ००२ – SURVIVORSHIP BIAS
              </h3>
              <p className="font-light text-gray-500 sm:text-lg">
                By prafulla.shashikant | Art of thinking clearly
              </p>
              <div className="flex justify-center items-baseline my-8">
                <span className="mr-2 text-5xl font-extrabold"></span>
                <span className="text-gray-500"></span>
              </div>
              {/* List */}
              <ul role="list" className="mb-8 space-y-4 text-left">
                <li className="flex items-center space-x-3">
                  {/* Icon */}
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    स्पष्टपणे विचार करण्याची कला भाग ००२ – SURVIVORSHIP BIAS
                    गावाकडे बी.ए. पास होऊन भरत पहिल्यांदाच पुण्यात आला होता.
                    सदाशिव पेठेत संध्याकाळी फिरताना त्याला तरुणांचे जत्थेच्या
                    जत्थे [...]
                  </span>
                </li>
                {/* <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>Basic body analysis with limited features.</span>
                </li> */}
                {/* <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>Limited access to smartwatch data analysis.</span>
                </li> */}
                {/* <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>Basic level chatbot functionality.</span>
                </li> */}
                {/* <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-red-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>

                  <span>Ads-Free</span>
                </li> */}
                {/* <li className="flex items-center space-x-3">

                  <span>Limit: 50 Requests Per hour</span>
                </li> */}
                {/* Additional list items */}
              </ul>
              <a
                href="https://vopa.in/survivorship-bias/"
                className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Read More
              </a>
            </div>
            <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-blue-50 shadow-xl border-blue-600 rounded-lg border xl:p-8">
              <h3 className="mb-4 text-2xl font-semibold">
                बुडालेल्या किंमतीचा पाश: स्पष्टपणे विचार करण्याची कला भाग ००३
              </h3>
              <p className="font-light text-gray-500 sm:text-lg">
                By prafulla.shashikant | Art of thinking clearly.
              </p>
              <div className="flex justify-center items-baseline my-8">
                <span className="mr-2 text-5xl font-extrabold"></span>
                <span className="text-gray-500"></span>
              </div>
              <ul role="list" className="mb-8 space-y-4 text-left">
                <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    रविवारचा दिवस होता, मी पाचशे रुपये मोजून बायकोसोबत चित्रपट
                    पाहायला गेलो. पहिल्या १५ मिनिटात कळून चुकलं की आपला पोपट
                    झालाय, चित्रपट अगदीच बकवास आहे! एक दोन वेळा आळस देऊन [...]
                  </span>
                </li>
                {/* <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>Basic body analysis with limited features.</span>
                </li> */}
                {/* <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>Limited access to smartwatch data analysis.</span>
                </li> */}
                {/* <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>Basic level chatbot functionality.</span>
                </li> */}
                {/* <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-red-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>

                  <span>Ads-Free</span>
                </li> */}
                {/* <li className="flex items-center space-x-3">


                  <span>Limit: 50 Requests Per hour</span>
                </li> */}
              </ul>
              <a
                href="https://vopa.in/%e0%a4%ac%e0%a5%81%e0%a4%a1%e0%a4%be%e0%a4%b2%e0%a5%87%e0%a4%b2%e0%a5%8d%e0%a4%af%e0%a4%be-%e0%a4%95%e0%a4%bf%e0%a4%82%e0%a4%ae%e0%a4%a4%e0%a5%80%e0%a4%9a%e0%a4%be-%e0%a4%aa%e0%a4%be%e0%a4%b6/"
                className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Read More
              </a>
            </div>
            <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow xl:p-8">
              <h3 className="mb-4 text-2xl font-semibold">
                पुष्टीकरण पूर्वाग्रह ०१: स्पष्टपणे विचार करण्याची कला: भाग ००४
              </h3>
              <p className="font-light text-gray-500 sm:text-lg">
                By prafulla.shashikant|Art of thinking clearly
              </p>
              <div className="flex justify-center items-baseline my-8">
                <span className="mr-2 text-5xl font-extrabold"></span>
                <span className="text-gray-500"></span>
              </div>
              {/* List */}
              <ul role="list" className="mb-8 space-y-4 text-left">
                <li className="flex items-center space-x-3">
                  {/* Icon */}
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    भरतने ठरवलं की आता आपल्याला वजन कमी करायच आहे. भरपूर पैसे
                    खर्च करून त्याने दीक्षित डाएट फॉलो करायला सुरवात केली. वजन
                    कमी करायचं ठरवलेल्या कुठल्याही हौशी व्यक्तीप्रमाणे तो रोज
                    [...]
                  </span>
                </li>
                {/* <li className="flex items-center space-x-3">
                 
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>Basic body analysis with limited features.</span>
                </li> */}
                {/* <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>Limited access to smartwatch data analysis.</span>
                </li> */}
                {/* <li className="flex items-center space-x-3">
                 \
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>Basic level chatbot functionality.</span>
                </li> */}
                {/* <li className="flex items-center space-x-3">
                 
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-red-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>

                  <span>Ads-Free</span>
                </li> */}
                {/* <li className="flex items-center space-x-3">
      

                  <span>Limit: 50 Requests Per hour</span>
                </li> */}
                {/* Additional list items */}
              </ul>
              <a
                href="https://vopa.in/%e0%a4%aa%e0%a5%81%e0%a4%b7%e0%a5%8d%e0%a4%9f%e0%a5%80%e0%a4%95%e0%a4%b0%e0%a4%a3-%e0%a4%aa%e0%a5%82%e0%a4%b0%e0%a5%8d%e0%a4%b5%e0%a4%be%e0%a4%97%e0%a5%8d%e0%a4%b0%e0%a4%b9-%e0%a5%a6%e0%a5%a7/"
                className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
