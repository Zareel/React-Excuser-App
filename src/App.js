import { useState } from "react";
import large from "./img/large.png";

import mobile from "./img/mobile.png"
import axios from "axios";

function App() {
  const [excuse, setExcuse] = useState(
    "I was passing by a school lane, so I was driving slow"
  );

  const fetchData = async (excuse) => {
    const { data } = await axios.get(
      `https://excuser-three.vercel.app/v1/excuse/${excuse}/`
    );
    //setExcuse(data[0].excuse);
    setExcuse(data[0].excuse);
  };

  return (
    <div className="relative max-h-screen">
      <img className="hidden md:flex md:absolute w-full h-screen" src={large} alt="img" />
      <img src={mobile} className="md:hidden absolute w-full h-screen"/>
      
      <div className="md:bg-transparent flex  flex-col gap-4 lg:justify-center h-screen items-center  lg:ml-10 w-full lg:w-[800px] absolute text-black">
        <div className="w-full min-h-[180px] lg:min-h-[200px]">
          <h1 className=" px-6 text-2xl mt-20 lg:mt-0  md:text-4xl  w-full text-center text-black font-bold font-excuse">{excuse}</h1>
        </div>
        <button
          onClick={() => {
            fetchData("funny");
          }}
          className="md:text-xl bg-sky-800 px-6 py-2 mt-10 md:mt-0 rounded-md w-56 font-semibold hover:bg-sky-700 font-excuse"
        >
          Funny
        </button>
        <button
          onClick={() => {
            fetchData("office");
          }}
          className="md:text-xl bg-pink-600 px-6 py-2 rounded-md w-56 font-semibold hover:bg-pink-500 font-excuse"
        >
          Office
        </button>
        <button
          onClick={() => {
            fetchData("developers");
          }}
          className="md:text-xl bg-orange-600 px-6 py-2 rounded-md mb-10 w-56 font-semibold hover:bg-orange-500 font-excuse"
        >
          Developers
        </button>

        <h1 className="text-5xl lg:text-6xl font-bold  lg:pb-12">Generate an excuse</h1>
        {/* <img src={minionmobile} className="md:hidden"/> */}
      </div>
    </div>
  );
}

export default App;
