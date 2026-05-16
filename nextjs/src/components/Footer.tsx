import Link from 'next/link';
import { products } from '@/data';

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-white mt-auto">
      <div className="overlap container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {/* PRODUCTS */}
          <div>
            <h3 className="text-amber-400 font-bold mb-2 uppercase text-sm tracking-wider">
              PRODUCTS
            </h3>
            <ul className="space-y-1 text-sm">
              {products.map((product, idx) => (
                <li key={idx}>
                  {product.href ? (
                    <Link href={product.href} className="hover:text-amber-400 transition-colors">
                      {product.text}
                    </Link>
                  ) : (
                    <span>{product.text}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h3 className="text-amber-400 font-bold mb-2 uppercase text-sm tracking-wider">
              COMPANY
            </h3>
            <ul className="space-y-1 text-sm">
              <li><Link href="/about-us" className="hover:text-amber-400 transition-colors">About Us</Link></li>
              <li><Link href="/customers" className="hover:text-amber-400 transition-colors">Customers</Link></li>
              <li><Link href="/press" className="hover:text-amber-400 transition-colors">Press</Link></li>
              <li><Link href="/jobs" className="hover:text-amber-400 transition-colors">Jobs</Link></li>
            </ul>
          </div>

          {/* RESOURCES */}
          <div>
            <h3 className="text-amber-400 font-bold mb-2 uppercase text-sm tracking-wider">
              RESOURCES
            </h3>
            <ul className="space-y-1 text-sm">
              <li><Link href="/resource-center" className="hover:text-amber-400 transition-colors">Resource Center</Link></li>
              <li><Link href="/blogs" className="hover:text-amber-400 transition-colors">Blogs</Link></li>
            </ul>
          </div>

          {/* SUPPORT */}
          <div>
            <h3 className="text-amber-400 font-bold mb-2 uppercase text-sm tracking-wider">
              SUPPORT
            </h3>
            <ul className="space-y-1 text-sm">
              <li><Link href="/help-center" className="hover:text-amber-400 transition-colors">Help Center</Link></li>
              <li><Link href="/product-status" className="hover:text-amber-400 transition-colors">Product Status</Link></li>
              <li><Link href="/support" className="hover:text-amber-400 transition-colors">Support</Link></li>
            </ul>
          </div>

          {/* NEWSLETTER + SOCIAL + CONNECT */}
          <div className="space-y-4">
            <div>
              <h3 className="text-amber-400 font-bold mb-2 uppercase text-sm tracking-wider">
                CONNECT WITH US
              </h3>
              <div className="text-sm space-y-2">
                <div className="flex items-start gap-2">
                  <span className="mt-0.5">📞</span>
                  <div className="flex flex-col">
                    <a href="tel:+919443144719" className="hover:text-amber-400 transition-colors">+91 9443144719</a>
                    <a href="tel:+919585544719" className="hover:text-amber-400 transition-colors">+91 9585544719</a>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="mt-0.5">📍</span>
                  <address className="not-italic">
                    Jagada Industries<br />
                    3/1224-6, Sattur Road,<br />
                    Virudhunagar - 626002, TN
                  </address>
                </div>
                <div className="flex items-center gap-2">
                  <span>✉️</span>
                  <a href="mailto:info@jagadagroup.com" className="lowercase hover:text-amber-400 transition-colors">
                    info@jagadagroup.com
                  </a>
                </div>
              </div>
            </div>

            {/* Query form */}
            <form className="bg-white/5 p-3 rounded space-y-2">
              <p className="text-xs font-semibold">Any queries?</p>
              <p className="text-xs text-gray-400">Keep up with the latest news in industry</p>
              <input
                type="text"
                placeholder="Type your query here..."
                className="w-full px-2 py-1 text-sm bg-stone-800 border border-stone-700 rounded text-white placeholder-gray-500"
              />
              <div className="flex gap-2">
                <div className="flex-1 flex">
                  <span className="bg-stone-700 px-2 py-1 text-sm rounded-l border border-stone-600">@</span>
                  <input
                    type="email"
                    placeholder="ben@example.com"
                    className="flex-1 px-2 py-1 text-sm bg-stone-800 border-y border-r border-stone-600 rounded-r text-white placeholder-gray-500"
                  />
                </div>
                <button
                  type="submit"
                  className="px-4 py-1 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded transition-colors"
                >
                  SEND
                </button>
              </div>
            </form>

            {/* Social */}
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Facebook">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://www.linkedin.com/in/deleep-kumar-504813141/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Google Translate */}
        <div className="mt-6 border-t border-stone-700 pt-4">
          <div id="google_translate_element" />
        </div>
      </div>
    </footer>
  );
}