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
    <div className="h-screen pb-14 bg-right bg-cover">
      <Particles></Particles>
      <div className="w-full container mx-auto p-6">
        <div className="w-full flex items-center justify-between">
          <a
            className="flex items-center text-indigo-400 no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
            href="#"
          >
            <div className="btn btn-ghost normal-case text-2xl logo">
              Weenie Dog
            </div>
          </a>

          <div className="flex w-1/2 justify-end content-center">
            {!showLogin && (
              <div style={{ position: "relative" }}>
                <ReactSparkle />
                <button onClick={() => setShowLogin(true)} className="btn">
                  Join
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="container pt-24 md:pt-28 px-6 mx-auto flex flex-wrap flex-col md:flex-row items-center">
        <div className="flex flex-col w-full xl:w-1/2 justify-center lg:items-start overflow-y-hidden">
          <h1 className="my-4 text-3xl md:text-6xl text-purple-800 font-bold leading-tight text-center md:text-left slide-in-bottom-h1">
            Have you ever wanted a really weenie dog?
          </h1>
          <div className="leading-normal text-base md:text-2xl mb-8 text-center md:text-left slide-in-bottom-subtitle">
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

          <input type="checkbox" id="my-modal" className="modal-toggle" />
          <div className="modal">
            <div className="home">
              <Login />
            </div>
          </div>
        </div>
        <Logo width={500} height={500} className=" fill-neutral-content glow" />
      </div>

      <div className="w-full pt-16 pb-6 text-sm text-center md:text-left fade-in">
        <a className="text-purple-900 no-underline hover:no-underline" href="#">
          Weenie Corp inc &copy; 2022
        </a>
      </div>
    </div>
  );
};

Home.getLayout = getLayout;

export default Home;
