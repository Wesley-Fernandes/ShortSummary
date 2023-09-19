import React from "react";

export default function InputSearch() {
  return (
    <input
      type="text"
      placeholder="Url do video"
      name="search"
      style={{ backgroundColor: "#202024" }}
      autoComplete="off"
      className="h-12 w-[452px] max-[516px]:w-[360px] max-[420px]:w-[320px] border-0 border-none indent-3 rounded focus-visible:outline-none focus-visible:outline-purple-1 text-slate-400"
    />
  );
}
