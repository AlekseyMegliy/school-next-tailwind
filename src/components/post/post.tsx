import React from "react";
import Image from "next/image";
import Link from "next/link";
import errorImg from "../../../public/error_img.png";
interface Id {
  id: number;
  info: { one: string; two: string };
}

export default function Post({ id, info }: Id) {
  return (
    <Link
      href="/Posts/[post]"
      as={`/Posts/${id}`}
      className="flex flex-col gap-6 rounded-xl border-2 border-black bg-slate-100 p-8"
    >
      <Image src={errorImg} alt="Error Image" />
      <h3>Post {id}</h3>
      <p>Short description {info.one}</p>
    </Link>
  );
}
