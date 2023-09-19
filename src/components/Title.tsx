import React from "react";
import Image from "next/image";
export default function Title() {
  return (
    <div className=" flex items-center flex-col justify-center w-[261px] mb-16">
      <Image src={"/Play.svg"} height={76} width={80} alt="Logotipo" className="animate__animated animate__slideInLeft mr-4" />
      <h1 style={{color: "#996DFF"}} className=" font-bold text-3xl">Shorts Summary</h1>
    </div>
  );
}
