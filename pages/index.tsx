import Login from "components/Login";
import Logo from "components/Logo";
import { getLayout } from "layouts/Basic";
import { Fragment, useState } from "react";
import { NextPageWithLayout } from "./_app";
import useMouse from "@rooks/use-mouse";
import dynamic from "next/dynamic";
import Sparkle from "react-sparkle";

import ReactSparkle from "react-sparkle";
const Particles = dynamic(() => import("../components/Particle"), {
  ssr: false,
});
const Home: NextPageWithLayout = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <main className="min-h-screen bg-right bg-cover intro">
      <section className="">
        <Particles></Particles>
        <div className="w-full container mx-auto p-6">
          <div className="w-full flex items-center justify-between">
            <a
              className="flex items-center  text-purple-800 no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
              href="#"
            >
              <div
                style={{ textShadow: "#5c08ab 1px 1px 0px" }}
                className="btn btn-ghost normal-case text-2xl logo"
              >
                Weenie Dog™️
              </div>
            </a>

            <div className="flex w-1/2 justify-end content-center">
              {!showLogin && (
                <div
                  style={{
                    position: "relative",
                    textAlign: "center",
                    opacity: showLogin ? 0 : 1,
                  }}
                >
                  <label
                    onClick={() => setShowLogin(true)}
                    htmlFor="my-modal"
                    className="btn btn-md mx-auto"
                  >
                    join
                  </label>
                  <Sparkle />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container pt-24 md:pt-28 px-6 mx-auto flex flex-wrap flex-col md:flex-row items-center">
          <div className="flex flex-col w-full xl:w-1/2 justify-center lg:items-start overflow-y-hidden">
            <h1
              style={{ textShadow: "#FFC0EB 4px 4px 0px" }}
              className="my-4 text-3xl md:text-6xl mb-10 text-shadow text-purple-800 font-bold leading-tight text-center md:text-left slide-in-bottom-h1"
            >
              Have you ever wanted a really weenie dog??
            </h1>
            <div className="mb-10 leading-normal text-base md:text-2xl text-center md:text-left slide-in-bottom-subtitle">
              Then you are in the right place my friend...
            </div>

            <div
              style={{
                position: "relative",
                textAlign: "center",
                opacity: showLogin ? 0 : 1,
              }}
            >
              <label
                onClick={() => setShowLogin(true)}
                htmlFor="my-modal"
                className="btn home btn-lg mx-auto btn-primary text-black glow "
              >
                Sign up for free
              </label>
              <Sparkle />
            </div>
          </div>
          <Logo
            width={500}
            height={500}
            className=" fill-neutral-content glow"
          />
        </div>
      </section>
      <section>
        <svg
          viewBox="0 0 1428 174"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g stroke="none" strokeWidth="1" fill="none" fill-rule="evenodd">
            <g
              transform="translate(-2.000000, 44.000000)"
              fill="#FFFFFF"
              fill-rule="nonzero"
            >
              <path
                d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496"
                opacity="0.100000001"
              ></path>
              <path
                d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
                opacity="0.100000001"
              ></path>
              <path
                d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z"
                id="Path-4"
                opacity="0.200000003"
              ></path>
            </g>
            <g
              transform="translate(-4.000000, 76.000000)"
              fill="#FFFFFF"
              fill-rule="nonzero"
            >
              <path d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z"></path>
            </g>
          </g>
        </svg>
      </section>
      <section className="bg-white">
        <div
          className="w-screen bg-white"
          style={{
            backgroundImage: "url(hero_bg.png)",
            backgroundSize: "contain",
            backgroundRepeat: "repeat",
          }}
        >
          <div className="container max-w-5xl mx-auto pt-20">
            <h2
              style={{ textShadow: "#FFC0EB 4px 4px 0px" }}
              className="lucky w-full my-2 text-7xl font-bold leading-tight text-center text-[#FF00F2] relative"
            >
              <Sparkle count={50} minSize={5} maxSize={8} color="#FF00F2" />
              Lol... wtf is weenie dog™️??
            </h2>
            <div className="w-full mb-4">
              <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
            </div>
            <div className="flex flex-wrap">
              <div className="w-5/6 sm:w-1/2 p-6">
                <h3
                  style={{ textShadow: "#FFC0EB 4px 4px 0px" }}
                  className="text-5xl lucky text-purple-900  font-bold leading-none mb-3"
                >
                  The future just got.... weenie!
                </h3>
                <p className="text-black text-xl mb-8">
                  Weenie Dog™️ allows you to rapidly create interactive tours
                  for product feature prototypes.
                  <br />
                  <br />
                  Get feedback on new feature ideas, showcase user flows or just
                  have fun experimenting with real-time guided user
                  interactions.
                  <br />
                  <br />
                  You can spend more time creating features that bring value and
                  less time working out what doesn&apos;t!
                  <br />
                  <br />
                  .... oh yeah- and free doggy biscuits! 🐶
                </p>
              </div>
              <div className="w-full sm:w-1/2 p-6 flex">
                <img
                  className="mask mask-heart max-w-50 w-full"
                  src="/doggie.gif"
                />
              </div>
            </div>

            <div className="flex flex-wrap flex-col-reverse sm:flex-row">
              <div className="w-full sm:w-1/2  relative flex">
                <img src="/dog.gif" className="w-full " />
              </div>
              <div className="w-full sm:w-1/2 p-6 mt-6">
                <div className="align-middle">
                  <h3
                    style={{ textShadow: "#FFC0EB 4px 4px 0px" }}
                    className="text-5xl lucky text-purple-900  font-bold leading-none mb-3"
                  >
                    Less enraging, More engaging!
                  </h3>
                  <p className="text-black text-xl mb-8">
                    By harnesing the power of Weenie Dog™️ your users will feel
                    engaged and empowered using you interactive Weenie Dog™️
                    prototypes.
                    <br />
                    <br />
                    This enables your team to get feedback on design ideas
                    quickly, allowing you to rapidly iterate on innovative
                    design concepts.
                    <br />
                    <br />
                    .... did we mention free doggy biscuits?!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        style={{
          backgroundImage: "url(testimonial_bg.png)",
          backgroundSize: "cover",
          backgroundRepeat: "repeat",
          backgroundPositionY: "bottom",
          backgroundBlendMode: "hard-light",
        }}
        className="bg-purple-900 text-[#FFC0EB] p-10"
      >
        <div className="text-xl mb-5">Our Sponsors</div>
        <div className="flex justify-between mx-11">
          <div className="text-s">
            <img
              className="w-28"
              src="https://images-platform.99static.com//Mzj3fk7pU0puKJ4ph43jQyPnY04=/164x29:800x665/fit-in/500x500/99designs-contests-attachments/118/118100/attachment_118100005"
            ></img>
          </div>
          <div className="text-xl">
            <img
              className="w-28"
              src="data:image/jpeg;base64,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"
            ></img>
          </div>
          <div className="text-xl">
            <img
              className="w-28"
              src="https://cms-assets.tutsplus.com/cdn-cgi/image/width=630/uploads/users/1631/posts/38711/image-upload/DogLogoDesign014.jpg"
            />
          </div>
        </div>
      </section>
      <section
        className="bg-white py-8"
        style={{
          backgroundImage: "url(testimonial_bg.png)",
          backgroundSize: "cover",
          backgroundRepeat: "repeat",
        }}
      >
        <div className="container mx-auto flex flex-wrap pt-4 pb-12">
          <h2
            style={{ textShadow: "#FFC0EB 4px 4px 0px" }}
            className="lucky w-full my-2 text-6xl font-bold leading-tight text-center text-purple-900 relative"
          >
            <Sparkle count={50} minSize={5} maxSize={8} color="#FF00F2" />
            What the dawgs are saying:
          </h2>
          <div className="w-full mb-4">
            <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
          </div>
          <div className="w-full min-h-52 md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
            <div className="text-center bg-white rounded-t p-10 rounded-b-none overflow-hidden shadow justify-center content-center">
              <div className="w-full font-bold text-3xl text-gray-80">
                `&quot;`Woof woof`&quot;`
              </div>

              <div className="w-24 mx-auto my-10 ">
                <img src="/1.jpg" />
              </div>

              <p className="text-purple-800 text-base mx-auto mt-5">
                Dog at Dog
              </p>
            </div>
          </div>
          <div className="w-full min-h-52 md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
            <div className="text-center bg-white rounded-t p-10 rounded-b-none overflow-hidden shadow justify-center content-center">
              <div className="w-full font-bold text-xl text-gray-80">
                `&quot;`Weenie Dog™️ has allowed our team to deliver innovative,
                feature rich products at scale, without scaling our
                prices.`&quot;`
              </div>

              <div className="w-36 mx-auto my-10">
                <img src="/2.jpg" />
              </div>

              <p className="text-purple-800 text-base mx-auto mt-5">
                CEO of Doggies R Us
              </p>
            </div>
          </div>
          <div className="w-full min-h-52 md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
            <div className="text-center bg-white rounded-t p-10 rounded-b-none overflow-hidden shadow justify-center content-center">
              <div className="w-full font-bold text-3xl text-gray-80">
                `&quot;`Free doggy biscuits`&quot;`
              </div>

              <div className="w-36 mx-auto my-10">
                <img src="/3.jpeg" />
              </div>

              <p className="text-purple-800 text-base mx-auto mt-5">
                Freelance dog
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white pt-52 pb-52 text-center">
        <label
          onClick={() => setShowLogin(true)}
          htmlFor="my-modal"
          className="text-6xl btn btn-primary btn-lg p-5 h-24 mx-auto"
        >
          OK, I&apos;m sold!
        </label>
      </section>

      <section>
        <footer className="footer footer-center p-10 bg-neutral text-primary-content">
          <div>
            <div className="text-5xl">🌭</div>
            <p className="font-bold"></p>
            <small>Copyright Weenie Corp. © 2022 - All right reserved</small>
          </div>
          <div>
            <div className="grid grid-flow-col gap-4">
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </a>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                </svg>
              </a>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
              </a>
            </div>
          </div>
        </footer>
        <input type="checkbox" id="my-modal" className="modal-toggle" />
        <div className="modal">
          <div className="home">
            <Login />
          </div>
        </div>
      </section>
    </main>
  );
};

Home.getLayout = getLayout;

export default Home;
