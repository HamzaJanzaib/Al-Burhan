"use client";
import React from "react";

const FooterBackground = () => {
  return (
    <>
      <div className="absolute top-0 left-0 w-72 h-72 bg-[var(--color-secondary)]/20 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[--color-accent]/15 blur-3xl rounded-full translate-x-1/3 translate-y-1/3 pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-full h-[2px] bg-linear-to-r from-[--color-primary] via-[--color-secondary] to-[--color-accent] opacity-60"></div>
    </>
  );
};

export default FooterBackground;
