import { useState } from "react";
import axios from "axios";

function App() {
  const [excuse, setExcuse] = useState("I was passing by a school lane, so I was driving slow");

  const fetchData = async (excuse) => {
    const { data } = await axios.get(
      `https://excuser-three.vercel.app/v1/excuse/${excuse}/`
    );
    //setExcuse(data[0].excuse);
    setExcuse(data[0].excuse);
  };

  return (
    <div className="bg-[#111111] text-gray-300 min-h-screen flex flex-col">
    <div className="bg-black w-full min-h-screen text-white pt-24 flex flex-col justify-start items-center gap-4 text-5xl">
    <h1 className="text-6xl text-cyan-300 pb-12">Generate an excuse</h1>
    <button onClick={() => {fetchData("funny")}}className="text-xl bg-sky-800 px-6 py-2 rounded-md">Funny</button>
    <button onClick={() => {fetchData("office")}}className="text-xl bg-pink-600 px-6 py-2 rounded-md">Office</button>
    <button onClick={() => {fetchData("developers")}} className="text-xl bg-orange-600 px-6 py-2 rounded-md ">Developers</button>
    <h1 className="py-12 text-3xl text-cyan-200">{excuse}</h1>
    </div>
    </div>
  );
}

export default App;
