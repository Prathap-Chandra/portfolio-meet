// 'use client';
// import NavBar from '@/components/Navbar';
// import './globals.css';
// import Home from './page';
// import SkillSection from '@/components/SkillSection';
// import EducationSection from '@/components/EducationSection';
// import AboutSection from '@/components/AboutSection';
// import BriefSection from '@/components/BriefSection';

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en" className="dark">
//       <body>
//         <div className="relative w-full flex items-center justify-center">
//           <NavBar />
//         </div>
//         <main className="w-full">{children}</main>
//       </body>
//     </html>
//   );
// }

'use client';

import { usePathname } from 'next/navigation';
import Navigation from '@/components/Navigation';
import '@/components/style.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <main className="container mx-auto px-4">
          {children}
        </main>
      </body>
    </html>
  );
}