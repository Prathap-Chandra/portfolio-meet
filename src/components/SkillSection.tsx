'use-client';
import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CanvasRevealEffect } from '@/components/ui/canvas-reveal-effect';
import Head from 'next/head';
import { Rubik_Wet_Paint } from 'next/font/google';

const rubik = Rubik_Wet_Paint({
  subsets: ['latin'],
  weight: '400',
});
function SkillSection() {
  return (
    <>
      <Head>
        <link
          href="https://fonts.google.com/share?selection.family=Playwrite+GB+S:ital,wght@0,100..400;1,100..400"
          rel="stylesheet"
        />

        <link
          href="https://fonts.google.com/share?selection.family=DynaPuff:wght@400..700|Playwrite+GB+S:ital@1"
          rel="stylesheet"
        />
      </Head>
      <div className="border-line" />
      <div className="h-auto text-center mt-4 ">
        <h1
          className={`${rubik.className} md:text-5xl text-5xl text-center font-bold p-2 text-white relative z-20 max-w-2xl mx-auto `}
        >
          <span>My Growing Expertise</span>
        </h1>

        <div className="py-20 flex flex-col lg:flex-row items-center justify-center  dark:bg-black w-full gap-4 mx-auto px-8">
          <Card title="C, C++, JavaScript, TypeScript" mainStr="Languages">
            <CanvasRevealEffect
              animationSpeed={3}
              containerClassName="bg-black"
              colors={[
                [236, 72, 153],
                [232, 121, 249],
              ]}
              dotSize={2}
            />
            {/* Radial gradient for the cute fade */}
            <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
          </Card>
          <Card
            title="OOPs, OS, Networks, DBMS, Data Structure & Algorithms"
            mainStr="Core Subjects"
          >
            <CanvasRevealEffect
              animationSpeed={3}
              containerClassName="bg-black"
              colors={[
                [236, 72, 153],
                [232, 121, 249],
              ]}
              dotSize={2}
            />
            {/* Radial gradient for the cute fade */}
            <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
          </Card>
          <Card title="HTML, CSS, JS, Android, MERN," mainStr="Development">
            <CanvasRevealEffect
              animationSpeed={3}
              containerClassName="bg-black"
              colors={[
                [236, 72, 153],
                [232, 121, 249],
              ]}
              dotSize={2}
            />
            {/* Radial gradient for the cute fade */}
            <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
          </Card>
        </div>
      </div>
    </>
  );
}

const Card = ({
  title,
  mainStr,
  children,
}: {
  title: string;
  mainStr: string;
  children?: React.ReactNode;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative h-[27rem] relative"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <h2
          style={{ fontFamily: 'Playwrite GB S, cursive', fontWeight: 700 }}
          className="md:text-4xl italic text-5xl font-bold text-center text-yellow-50 max-w-2xl mx-auto group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200"
        >
          {mainStr}
        </h2>
        <h2
          style={{ fontFamily: 'DynaPuff', fontWeight: 600 }}
          className="dark:text-white text-xl opacity-0 text-center max-w-2xl mx-auto group-hover/canvas-card:opacity-100 absolute inset-0 flex items-center justify-center text-black mt-4 font-bold group-hover/canvas-card:text-yellow group-hover/canvas-card:-translate-y-2 transition duration-200"
        >
          {title}
        </h2>
      </div>
    </div>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};

export default SkillSection;
