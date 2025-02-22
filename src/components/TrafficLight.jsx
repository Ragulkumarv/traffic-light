import { useEffect, useState } from "react";

const TrafficLight = () => {
  const [light, setLight] = useState("red");

  useEffect(() => {
    let timer;
    if (light === "red") {
      timer = setTimeout(() => {
        setLight("green");
      }, 4000);
    } else if (light === "orange") {
      timer = setTimeout(() => {
        setLight("red");
      }, 2000);
    } else if (light === "green") {
      timer = setTimeout(() => {
        setLight("orange");
      }, 5000);
    }
    return () => clearTimeout(timer);
  }, [light]);
  return (
    <section className="flex flex-col items-center justify-center bg-gray-900 min-h-screen">
      <section className="flex flex-col gap-2">
        <div
          className={`w-14 h-14 rounded-full ${
            light === "red" ? "bg-red-500" : "bg-gray-500"
          }`}
        ></div>
        <div
          className={`w-14 h-14 rounded-full ${
            light === "orange" ? "bg-orange-500" : "bg-gray-500"
          }`}
        ></div>{" "}
        <div
          className={`w-14 h-14 rounded-full ${
            light === "green" ? "bg-green-500" : "bg-gray-500"
          }`}
        ></div>
      </section>
    </section>
  );
};

export default TrafficLight;
