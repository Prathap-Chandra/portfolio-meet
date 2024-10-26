'use client';
import './style.css';
import React from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import { CanvasRevealEffect } from '@/components/ui/canvas-reveal-effect';
function BriefSection() {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="h-[40rem] flex flex-col lg:flex-row overflow-hidden items-center justify-center bg-black w-full gap-4 mx-auto px-4 relative"
    >
      <div className="text-center">
        <h1
          style={{ position: 'relative' }}
          className="md:text-5xl text-5xl font-bold text-center text-yellow-50 relative z-20 max-w-2xl mx-auto"
        >
          <span className="animate-typing">Hii, I&apos;m Meet Prajapati</span>
        </h1>
        <div className="text-left mt-4">
          <p className="md:text-1xl font-serif text-1xl font-medium text-left text-gray-300 relative z-20 max-w-2xl mx-auto">
            I am a versatile software developer with a strong foundation in both
            front-end and back-end development, as well as Android app
            development.Currently, I am working as a backend developer at
            Freecharge Pvt. Ltd., a subsidiary of Axis Bank, where I contribute
            to building robust and scalable systems.
          </p>
          <br></br>
          <p className="md:text-1xl text-1xl  font-serif font-medium text-left text-gray-300 relative z-20 max-w-2xl mx-auto">
            I am always eager to take on new challenges and believe in a growth
            mindset that benefits not just my personal development but also the
            company&apos;s success.
          </p>
        </div>
      </div>
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="h-full w-full absolute inset-0"
          >
            <CanvasRevealEffect
              animationSpeed={5}
              containerClassName="bg-transparent"
              colors={[
                [59, 130, 246],
                [139, 92, 246],
              ]}
              opacities={[0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.4, 0.4, 0.4, 1]}
              dotSize={2}
            />
          </motion.div>
        )}
      </AnimatePresence>
      {/* Radial gradient for the cute fade */}
      <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
    </div>
  );
}

export default BriefSection;
