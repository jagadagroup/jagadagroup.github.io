'use client';

import { useState } from 'react';
import Link from 'next/link';
import { menu } from '@/data';

export default function Menu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="container-fluid position-fixed">
        <div className="row decorator"></div>
      </div>

      <div
        id="menu-button"
        className="d-flex flex-column align-items-center justify-content-around py-2"
        onClick={() => setOpen(!open)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && setOpen(!open)}
      >
        <span className="mb-1"></span>
        <span className="mb-1"></span>
        <span></span>
      </div>

      <div className={`page w-100 ${open ? '' : ''}`}>
        <nav className="row no-gutters d-flex">
          <div className="col"></div>
          <div id="menu-holder" className="col-9 col-sm-8 col-md-6 col-lg-4 col-xl-3 d-flex align-items-center" style={{
            position: 'fixed',
            top: 0,
            right: open ? 0 : '-100%',
            height: '100vh',
            backgroundColor: '#1a1a1a',
            zIndex: 40,
            transition: 'right 0.3s ease-in-out',
            overflowY: 'auto',
            padding: '4rem 1rem 1rem 1rem',
          }}>
            <ul className="menu w-100">
              {menu.map((item, idx) => (
                <li key={idx} className="d-flex flex-column align-items-center">
                  {item.sub ? (
                    <>
                      <div className="py-3 menu-rollout" style={{ color: '#fff' }}>
                        +&nbsp;&nbsp;{item.name}
                      </div>
                      <div className="d-flex flex-column menu-sub-container">
                        {item.sub.map((child, cIdx) => (
                          <Link
                            key={cIdx}
                            href={child.href}
                            className="py-3 menu-child"
                            style={{ color: '#fff' }}
                            onClick={() => setOpen(false)}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="py-3"
                      style={{ color: '#fff' }}
                      onClick={() => setOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}