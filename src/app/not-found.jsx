"use client";

import "./globals.css";
import { Button } from "@/components/global/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function NotFound() {
    const router = useRouter();
  return (
    <section
      aria-label="Party Hero"
      className="min-h-screen w-full bg-background text-foreground flex items-center justify-center relative"
    >
      <div className="container mx-auto px-6 md:px-10 lg:px-20">
        <div className="flex flex-col items-center text-center gap-10 md:gap-10 py-5">
          {/* Top small circle icon placeholder */}
          {/* <CircleSlash size={35} color="#e12323" /> */}

          {/* Headline */}
          <h1
            className="
              font-extrabold leading-tight
              text-[36px] sm:text-[48px] md:text-[64px] lg:text-[66px]
              tracking-tight 
              mx-2
            "
            style={{ lineHeight: 0.95 }}
          >
            <span className="block italic text-primary">OOPS! IT SEEMS</span>
            <span className="block uppercase">PAGE NOT FOUND.</span>
          </h1>


          {/* Bottom artwork */}
          <div className="w-full flex justify-center items-end">
            <div
              className="
                w-full max-w-[980px] 
                md:max-w-[1100px] lg:max-w-[1300px]
                -mb-6 md:-mb-10
              "
            >
              <Image
                src="/404.png"
                alt="404 art"
                priority
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 80vw, 1000px"
                style={{ objectFit: "contain" }}
                width={1000}
                height={500}
                className="w-full h-auto"
              />
            </div>
          </div>

            {/* CTA button */}
          <Button
            onClick={() => router.push('/')}
            className="rounded-4xl px-8 py-4 md:px-12 md:py-7 shadow-[0_8px_30px_rgba(204,255,0,0.12)] bg-primary text-white font-semibold flex items-center justify-center text-base md:text-lg cursor-pointer mt-4"
          >
            Home Page
          </Button>

          {/* spacer for mobile so image doesn't overlap */}
          <div className="h-6 md:hidden" />
        </div>
      </div>
    </section>
  );
}
