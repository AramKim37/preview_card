import Image from "next/image";
import React from "react";
import MainImage from "@/public/illustration-article.svg";
import Avata from "@/public/aram.jpg";
const Card = () => {
  return (
    <div className="">
      <div className="bg-white flex flex-col w-[300px] p-2 rounded-xl border border-black text-black space-y-2 shadow-[10px_10px_5px_black]">
        <Image src={MainImage} width={300} height={300} alt="main" />
        <h3 className="bg-yellow-500 w-fit py-2 px-4 rounded-[10px] text-[12px] font-bold">
          Learning
        </h3>
        <h3 className="text-[12px]">Published 21 Dec 2023</h3>
        <h1 className="font-bold">HTML & CSS foundations</h1>
        <p className="text-[12px] font-light">
          These languages are the backbone of every website. defining structure,
          content, and presentation.
        </p>
        <div className="flex gap-2 items-center">
          <Image
            src={Avata}
            width={24}
            height={24}
            alt="avata"
            className="w-6 h-6 object-cover object-center rounded-full"
          />
          <h1 className="text-[11px] font-bold">Greg hooper</h1>
        </div>
      </div>
    </div>
  );
};

export default Card;
