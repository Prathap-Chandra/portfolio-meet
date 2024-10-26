'use cilent';
import { Rubik_Wet_Paint } from 'next/font/google';

const rubik = Rubik_Wet_Paint({
  subsets: ['latin'],
  weight: '400',
});
export default function AboutSection() {
  return (
    <>
      <div className="border-line" />
      <div className="text-center">
        <p
          className={`${rubik.className} mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl`}
        >
          About Me
        </p>
        <h1 className="bg-black h-96 font-extrabold text-white text-3xl flex justify-center items-center">
          Hello meet, you are in about page
        </h1>
      </div>
    </>
  );
}
