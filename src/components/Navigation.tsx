'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path || pathname === `${path}/`;
  };

  return (
    <nav className="py-4 mb-8">
      <div className="container mx-auto px-4">
        <ul className="flex space-x-6 justify-center">
          <li>
            <Link 
              href="/brief"
              className={`${isActive('/brief') ? 'text-primary font-bold' : 'text-gray-600 hover:text-primary'}`}
            >
              Brief
            </Link>
          </li>
          <li>
            <Link 
              href="/skills"
              className={`${isActive('/skills') ? 'text-primary font-bold' : 'text-gray-600 hover:text-primary'}`}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link 
              href="/education"
              className={`${isActive('/education') ? 'text-primary font-bold' : 'text-gray-600 hover:text-primary'}`}
            >
              Education
            </Link>
          </li>
          <li>
            <Link 
              href="/about"
              className={`${isActive('/about') ? 'text-primary font-bold' : 'text-gray-600 hover:text-primary'}`}
            >
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}