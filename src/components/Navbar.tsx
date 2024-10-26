'use client';
import React, { useState, useRef, useEffect } from 'react';
import { Menu, MenuItem } from './ui/navbar-menu';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { BackgroundGradient } from './ui/background-gradient';

function NavBar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div
      className={cn('fixed top-10 inset-x-0 max-w-2xl mx-auto z-50', className)}
    >
      <BackgroundGradient>
        <Menu setActive={setActive}>
          <Link href="#brief" onClick={() => setActive('brief')}>
            <span className={active === 'brief' ? 'font-bold' : ''}>Home</span>
          </Link>
          <Link href="#skills" onClick={() => setActive('skills')}>
            <span className={active === 'skills' ? 'font-bold' : ''}>
              Skills
            </span>
          </Link>
          <Link href="#education" onClick={() => setActive('education')}>
            <span className={active === 'education' ? 'font-bold' : ''}>
              Education
            </span>
          </Link>
          <Link href="#about" onClick={() => setActive('about')}>
            <span className={active === 'about' ? 'font-bold' : ''}>About</span>
          </Link>
        </Menu>
      </BackgroundGradient>
    </div>
  );
}

export default NavBar;
