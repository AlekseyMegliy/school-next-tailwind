import React from "react";

export default function Dialogue(item: { props: string }) {
  return (
    <div className="flex flex-col w-full ">
      {item.props.split("/").map((item, index) => (
        <div
          className={`flex ${
            item[0] === "R" ? "justify-end" : "justify-start"
          } ${!Boolean(item) && "hidden"}`}
          key={index}
        >
          <p className="bg-sky-700 text-white m-2 w-1/2 p-2 rounded-lg box-border inline-block">
            {item.slice(1)}
          </p>
        </div>
      ))}
    </div>
  );
}
