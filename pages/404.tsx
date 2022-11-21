import { useRouter } from "next/router";

import dynamic from "next/dynamic";
const Particle = dynamic(() => import("../components/Particle"), {
  ssr: false,
});

import ReactSparkle from "react-sparkle";

const Custom404 = () => {
  const router = useRouter();
  return (
    <div className="h-screen pb-14 bg-right bg-cover text-center hover:drop-shadow-2xl animate-bounce">
      <Particle />
      <ReactSparkle />
      <img
        onClick={() => router.push("/")}
        className="pt-36 mx-auto hover:ease-in-out transition duration-150"
        src="/404.png"
      />
    </div>
  );
};

export default Custom404;
