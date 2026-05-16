'use client';

import { useState } from 'react';
import Link from 'next/link';
import { menu } from '@/data';

export default function Menu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="container-fluid position-fixed top-0 left-0 w-full z-40">
        <div className="row decorator bg-stone-800 h-2" />
      </div>

      {/* Hamburger button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed top-3 right-4 z-50 flex flex-col items-center justify-around w-10 h-10 p-2"
        aria-label="Toggle menu"
        id="menu-button"
      >
        <span className="block w-6 h-0.5 bg-white" />
        <span className="block w-6 h-0.5 bg-white" />
        <span className="block w-6 h-0.5 bg-white" />
      </button>

      {/* Off-canvas menu */}
      {open && (
        <div
          className="fixed top-0 right-0 h-full w-80 bg-stone-900 z-40 overflow-y-auto pt-16 pb-8"
          style={{ transition: 'transform 0.3s ease' }}
        >
          <nav className="w-full px-6">
            <ul className="menu w-full list-none space-y-1">
              {menu.map((item, idx) => (
                <li key={idx} className="flex flex-col items-center">
                  {item.sub ? (
                    <details className="w-full">
                      <summary className="py-3 text-white cursor-pointer hover:text-orange-300 text-center text-lg uppercase tracking-wider">
                        +&nbsp;&nbsp;{item.name}
                      </summary>
                      <div className="flex flex-col items-center gap-1 py-2">
                        {item.sub.map((child, cIdx) => (
                          <Link
                            key={cIdx}
                            href={child.href}
                            className="py-1 text-white hover:text-orange-300 transition-colors text-base"
                            onClick={() => setOpen(false)}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </details>
                  ) : (
                    <Link
                      href={item.href}
                      className={`py-3 text-white hover:text-orange-300 transition-colors text-center text-lg uppercase tracking-wider ${
                        open ? 'visible' : ''
                      }`}
                      onClick={() => setOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}

      {/* Overlay backdrop */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-30"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
}