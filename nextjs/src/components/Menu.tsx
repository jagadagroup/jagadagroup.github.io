'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { menu } from '@/data';

const SHORT_LABELS: Record<string, string> = {
  'home': 'Home',
  'about us': 'About',
  'products': 'Products',
  'production technology': 'Prod. Tech',
  'Production Quality': 'Quality',
  'contact us': 'Contact',
};

const COLORS = {
  headerBg: '#1a1a1a',
  headerText: '#ffffff',
  headerHover: '#daa520',
  dropdownBg: '#2a2a2a',
  dropdownText: '#cccccc',
  dropdownHover: '#daa520',
  mobileMenuBg: '#000000',
  mobileMenuText: '#ffffff',
  accent: '#daa520',
};

export default function Header({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenuStates, setSubmenuStates] = useState<Record<number, boolean>>({});
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const [scale, setScale] = useState(1);
  const [translateX, setTranslateX] = useState(0);
  const pageRef = useRef<HTMLDivElement>(null);
  const menuHolderRef = useRef<HTMLDivElement>(null);
  const dropdownTimers = useRef<Record<number, ReturnType<typeof setTimeout>>>({});

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
    const handleResize = () => { setMenuOpen(false); recalculateScale(); };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [recalculateScale]);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const toggleSubmenu = (idx: number) => setSubmenuStates((prev) => ({ ...prev, [idx]: !prev[idx] }));

  /** Per-submenu dropdown handlers — fixes the bug where both open simultaneously */
  const handleDropdownEnter = (idx: number) => {
    clearTimeout(dropdownTimers.current[idx]);
    setOpenDropdown(idx);
  };
  const handleDropdownLeave = (idx: number) => {
    dropdownTimers.current[idx] = setTimeout(() => {
      setOpenDropdown((prev) => (prev === idx ? null : prev));
    }, 200);
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
      {/* ===== HAMBURGER (visible < 768px) ===== */}
      <div
        id="menu-button"
        className={`d-flex d-md-none flex-column align-items-center justify-content-around py-2${menuOpen ? ' active' : ''}`}
        onClick={toggleMenu}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && toggleMenu()}
      >
        <span className="mb-1"></span>
        <span className="mb-1"></span>
        <span></span>
      </div>

      {/* ===== TOP HEADER BAR (visible ≥ 768px) ===== */}
      <header
        className="d-none d-md-flex align-items-center px-3 px-lg-4"
        style={{
          height: '56px',
          background: COLORS.headerBg,
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 99,
        }}
      >
        {/* Inner container — max-width constrained on large screens */}
        <div className="d-flex align-items-center w-100" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <Link href="/" className="d-flex align-items-center text-decoration-none">
            <Image src="/svgs/jagada.svg" alt="Jagada Industries" width={64} height={36} unoptimized priority />
          </Link>

          <nav aria-label="Main navigation" className="d-flex align-items-center" style={{ position: 'static', width: 'auto', height: 'auto' }}>
            {menu.map((item, idx) => {
              const label = SHORT_LABELS[item.name] || item.name;
              if (item.sub?.length) {
                const isOpen = openDropdown === idx;
                return (
                  <div
                    key={idx}
                    className="position-relative"
                    onMouseEnter={() => handleDropdownEnter(idx)}
                    onMouseLeave={() => handleDropdownLeave(idx)}
                  >
                    <Link
                      href={item.href}
                      className="d-inline-block px-2 px-lg-3 text-decoration-none text-uppercase"
                      style={{
                        fontSize: '0.8rem',
                        letterSpacing: '0.5px',
                        lineHeight: '56px',
                        color: COLORS.headerText,
                      }}
                    >
                      {label} ▾
                    </Link>
                    {isOpen && (
                      <div
                        className="position-absolute py-2"
                        style={{
                          top: '100%',
                          left: 0,
                          minWidth: '180px',
                          zIndex: 100,
                          borderRadius: '0 0 4px 4px',
                          background: COLORS.dropdownBg,
                        }}
                        onMouseEnter={() => handleDropdownEnter(idx)}
                        onMouseLeave={() => handleDropdownLeave(idx)}
                      >
                        {item.sub.map((child, cIdx) => (
                          <Link
                            key={cIdx}
                            href={child.href}
                            className="d-block px-3 py-2 text-decoration-none"
                            style={{ fontSize: '0.8rem', color: COLORS.dropdownText }}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <Link
                  key={idx}
                  href={item.href}
                  className="d-inline-block px-2 px-lg-3 text-decoration-none text-uppercase"
                  style={{
                    fontSize: '0.8rem',
                    letterSpacing: '0.5px',
                    lineHeight: '56px',
                    color: COLORS.headerText,
                  }}
                >
                  {label}
                </Link>
              );
            })}
            <Link
              href="/blogs/"
              className="d-inline-block px-2 px-lg-3 text-decoration-none text-uppercase"
              style={{
                fontSize: '0.8rem',
                letterSpacing: '0.5px',
                lineHeight: '56px',
                color: COLORS.headerText,
              }}
            >
              Blog
            </Link>
          </nav>
        </div>
      </header>

      {/* ===== MOBILE OFF-CANVAS MENU (visible < 768px) ===== */}
      <nav className="row no-gutters d-flex d-md-none">
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
                    <div className="py-3 menu-rollout" style={{ color: COLORS.mobileMenuText }} onClick={() => toggleSubmenu(idx)}>
                      {submenuStates[idx] ? '-\u00A0\u00A0' : '+\u00A0\u00A0'}{item.name}
                    </div>
                    <div className={`flex-column menu-sub-container${submenuStates[idx] ? ' d-flex' : ' d-none'}`}>
                      {item.sub.map((child, cIdx) => (
                        <Link key={cIdx} href={child.href} className="py-3 menu-child" style={{ color: COLORS.mobileMenuText }} onClick={() => setMenuOpen(false)}>
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link href={item.href} className="py-3" style={{ color: COLORS.mobileMenuText }} onClick={() => setMenuOpen(false)}>
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
            <li className="d-flex flex-column align-items-center">
              <Link href="/blogs/" className="py-3" style={{ color: COLORS.mobileMenuText }} onClick={() => setMenuOpen(false)}>
                blogs
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* ===== PAGE CONTENT ===== */}
      <div className={`page w-100${menuOpen ? ' active' : ''}`}
        style={{ ...pageStyle, paddingTop: menuOpen ? 0 : undefined }}>
        <div className={menuOpen ? '' : 'd-none d-md-block'} style={{ height: '56px' }} />
        <header></header>
        {children}
      </div>
    </>
  );
}