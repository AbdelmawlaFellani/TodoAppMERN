import React from "react";


export const CButton = () => {
  return (
    <a href="/download"
  class="group relative inline-block  text-xs font-semibold text-white focus:outline-none focus:ring active:text-colorbtn"
>
  <span
    class="absolute inset-0 rounded-full translate-x-0.5 translate-y-0.5 bg-colortext transition-transform group-hover:translate-y-0 group-hover:translate-x-0"
  ></span>

  <span class=" font-GameText rounded-full relative block border border-colortext bg-colorbtn px-8 py-3">
    Add
  </span>
</a>
  );
};

export const AButton = () =>{
  return (
    <a
      href="/download"
      className="group relative inline-block text-xs font-semibold text-white focus:outline-none focus:ring active:text-colorbtn"
    >
      <span
        className="absolute inset-0 rounded-full group-hover:translate-x-0.5 group-hover:translate-y-0.5 bg-colorbtn transition-transform translate-y-0 translate-x-0"
      ></span>

      <span className=" border-2 border-colortext relative block p-1 px-2 bg-textured-bg rounded-xl  group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform">
        <span className=" font-GameText rounded-full p-1 relative">
          Add
        </span>
      </span>
    </a>
  )
} 
export const PButton = () => {
  return(
    <a href='/' className="pixel-button-add inline-block"></a>
    //<a href="/" className="button font-GameText py-1 px-2 text-colortext">ADD</a>
  )
}