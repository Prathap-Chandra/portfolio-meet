'use cilent';
import { HoverEffect } from './ui/card-hover-effect';
import { GlareCard } from './ui/glare-card';
import { Rubik_Wet_Paint } from 'next/font/google';

const rubik = Rubik_Wet_Paint({
  subsets: ['latin'],
  weight: '400',
});

const education = [
  {
    title: 'Grade: 10th',
    description: 'GSEB: 2017-2018',
    message: 'CGPA: 8.6',
  },
  {
    title: 'Grade: 12th(Science)',
    description: 'GHSEB: 2018-2019',
    message: 'CGPA: 9.6',
  },
  {
    title: 'Grade: B.Tech(ICT)',
    description: 'DAIICT: 2019-2023',
    message: 'CGPA: 7.25',
  },
];
function EducationSection() {
  return (
    <>
      <div className="border-line" />

      <div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center">
            <p
              className={`${rubik.className} mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl`}
            >
              My Education
            </p>
          </div>
          <div className="mt-5">
            <HoverEffect items={education} />
          </div>
        </div>
      </div>
    </>
  );
}

export default EducationSection;
