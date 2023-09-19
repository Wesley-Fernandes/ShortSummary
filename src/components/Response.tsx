"use client";
import { store } from "@/context/store";
import { useEffect, useRef, useState } from "react";

export default function Response() {
  const {setStatus, status} = store();
  const response = store((state) => state.response);
  const paragrafy = useRef<HTMLPreElement>(null);


  useEffect(() => {
    if (status == "Explicando...") {
      if (paragrafy.current) {
        const archive = response.split("").reverse();
        paragrafy.current.innerHTML = "";

        const digits: any = setInterval(() => {
          if (!archive.length) {
            setStatus("pausado");
            return clearInterval(digits);
          }

          const letter = archive.pop()!;

          if (paragrafy.current) {
            paragrafy.current.innerHTML += letter;
          }
        }, 15);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);
  return (
    <div className="mt-16 w-[516px] max-[516px]:w-[420px] max-[420px]:w-[380px]">
      <div className="flex gap-2 items-center mb-2">
        <h2 className="text-white font-bold text-2xl">Resumo</h2>
        <span className="flex items-center px-3 rounded-lg bg-purple-1 text-white uppercase">
          {status}
        </span>
      </div>

      <pre
        style={{
          color: "#7C7C8A",
          width: "100%",
          overflowX: "hidden",
          whiteSpace: "pre-wrap",
          fontFamily: "Roboto",
          backgroundColor: "#0c0c0cc8",
          padding: "5px",
          minHeight: "208px"
        }}
        className="max-h-52 overflow-y-scroll scroller rounded"
        ref={paragrafy}
      >
      </pre>
    </div>
  );
}
