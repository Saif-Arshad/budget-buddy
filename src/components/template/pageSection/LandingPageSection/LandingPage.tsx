"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";

export function LandingPage() {
  return (
    <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl px-4 md:text-4xl capitalize mb-1 lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
      >
       Manage your expenses easily with
       <br />
        <Highlight className="text-black dark:text-white">
         Budget Buddy
        </Highlight>
      </motion.h1>
      <span className="w-full flex items-center justify-center">

      <p className="w-11/12 md:w-8/12 md:text-lg lg:text-6/12 mt-6 text-center text-black">
      Take control of your financial future with Budget Buddy, your ultimate tool for budgeting and expense tracking. Our platform is designed to simplify money management, helping you to stay on top of your spending and achieve your financial goals with ease.
      </p>
      
      </span>
    </HeroHighlight>
  );
}
