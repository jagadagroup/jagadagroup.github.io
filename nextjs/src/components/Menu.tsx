'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import { menu } from '@/data';

export default function Menu({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenuStates, setSubmenuStates] = useState<Record<number, boolean>>({});
  const [scale, setScale] = useState(1);
  const [translateX, setTranslateX] = useState(0);
  const pageRef = useRef<HTMLDivElement>(null);
  const menuHolderRef = useRef<HTMLDivElement>(null);

  const recalculateScale = useCallback(() => {
    const menuHolder = menuHolderRef.current;
    if (!menuHolder) return;
    const holderWidth = menuHolder.offsetWidth;
    const windowWidth = window.innerWidth;
    let s = 1 - (holderWidth / windowWidth);
    let tx = 0;
    if (s < 0.75) {
      const pageWidth = pageRef.current?.offsetWidth || windowWidth;
      tx = (0.75 - s) * pageWidth;
      s = 0.75;
    }
    setScale(s);
    setTranslateX(tx);
  }, []);

  useEffect(() => {
    recalculateScale();
    const handleResize = () => {
      setMenuOpen(false);
      recalculateScale();
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [recalculateScale]);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const toggleSubmenu = (idx: number) => {
    setSubmenuStates((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  const pageStyle: React.CSSProperties = menuOpen
    ? {
        transform: translateX > 0
          ? `translateX(-${translateX}px) scale(${scale})`
          : `scale(${scale})`,
        transformOrigin: 'top left',
      }
    : {};

  return (
    <>
      {/* Hamburger button */}
      <div
        id="menu-button"
        className={`d-flex flex-column align-items-center justify-content-around py-2${menuOpen ? ' active' : ''}`}
        onClick={toggleMenu}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && toggleMenu()}
      >
        <span className="mb-1"></span>
        <span className="mb-1"></span>
        <span></span>
      </div>

      {/* Navigation — OUTSIDE .page, matching old Pug HTML structure */}
      <nav className="row no-gutters d-flex">
        <div className="col"></div>
        <div
          ref={menuHolderRef}
          id="menu-holder"
          className={`col-9 col-sm-8 col-md-6 col-lg-4 col-xl-3 d-flex align-items-center${menuOpen ? ' active' : ''}`}
        >
          <ul className="menu w-100">
            {menu.map((item, idx) => (
              <li key={idx} className="d-flex flex-column align-items-center">
                {item.sub ? (
                  <>
                    <div
                      className="py-3 menu-rollout"
                      style={{ color: '#fff' }}
                      onClick={() => toggleSubmenu(idx)}
                    >
                      {submenuStates[idx] ? '-\u00A0\u00A0' : '+\u00A0\u00A0'}{item.name}
                    </div>
                    <div className={`flex-column menu-sub-container${submenuStates[idx] ? ' d-flex' : ' d-none'}`}>
                      {item.sub.map((child, cIdx) => (
                        <Link key={cIdx} href={child.href} className="py-3 menu-child" style={{ color: '#fff' }} onClick={() => setMenuOpen(false)}>
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link href={item.href} className="py-3" style={{ color: '#fff' }} onClick={() => setMenuOpen(false)}>
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Page wrapper with transform — nav is OUTSIDE this, matching old Pug */}
      <div className={`page w-100${menuOpen ? ' active' : ''}`} style={pageStyle} ref={pageRef}>
        <header></header>
        {children}
      </div>
    </>
  );
}