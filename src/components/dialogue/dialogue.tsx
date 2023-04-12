import React from "react";

export default function Dialogue(item: { props: string }) {
  return (
    <div className="flex w-full flex-col ">
      {item.props.split("/").map((item, index) => (
        <div
          className={`flex ${
            item[0] === "R" ? "justify-end" : "justify-start"
          } ${!Boolean(item) && "hidden"}`}
          key={index}
        >
          <p
            className={` m-2 box-border inline-block w-3/4 p-2 text-white md:w-1/2 ${
              item[0] === "R"
                ? "rounded-t-2xl rounded-bl-2xl bg-dialogueRes "
                : " rounded-t-2xl  rounded-br-2xl bg-dialogueMes "
            }`}
          >
            {item.slice(1)}
          </p>
        </div>
      ))}
    </div>
  );
}
