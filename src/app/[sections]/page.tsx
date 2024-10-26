'use client'; // Ensures that the component is client-side only

import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useParams } from 'next/navigation';
import BriefSection from '@/components/BriefSection';
import EducationSection from '@/components/EducationSection';
import SkillSection from '@/components/SkillSection';
import AboutSection from '@/components/AboutSection';

export default function Section() {
  const { section } = useParams(); // Use useParams to extract the URL parameter in the App Router

  useEffect(() => {
    if (Array.isArray(section)) {
      // If section is an array, take the first value
      console.warn('Multiple sections found, using the first one:', section[0]);
      scrollToSection(section[0]); // Handle the first element if it's an array
    } else if (section) {
      scrollToSection(section); // Handle the string directly
    }
  }, [section]);

  const scrollToSection = (sectionId: string) => {
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <section id="brief">
        <BriefSection />
      </section>
      <section id="skills">
        <SkillSection />
      </section>
      <section id="education">
        <EducationSection />
      </section>
      <section id="about">
        <AboutSection />
      </section>
    </main>
  );
}
