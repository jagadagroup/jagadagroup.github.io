import Link from 'next/link';
import { products } from '@/data';
import LocaleSwitcher from '@/components/LocaleSwitcher';
import FooterForm from '@/components/FooterForm';

export default function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="overlap">
          <div className="container-fluid">
            <div className="row"></div>
            <div className="row py-3 footer-row d-flex justify-content-between">
              <ul className="col-7 col-md-4 col-lg-2 p-2 list-unstyled">
                <li className="gold font-weight-bold" style={{ color: '#daa520' }}>PRODUCTS</li>
                {products.map((product, idx) => (
                  <li key={idx}>
                    {product.href ? (
                      <Link href={product.href} style={{ color: '#ccc' }}>{product.text}</Link>
                    ) : (
                      <span style={{ color: '#ccc' }}>{product.text}</span>
                    )}
                  </li>
                ))}
              </ul>
              <ul className="col-5 col-md-3 col-lg-2 p-2 list-unstyled">
                <li className="gold font-weight-bold" style={{ color: '#daa520' }}>COMPANY</li>
                <li><Link href="/about-us" style={{ color: '#ccc' }}>About Us</Link></li>
                <li><Link href="/customers" style={{ color: '#ccc' }}>Customers</Link></li>
                <li><Link href="/press" style={{ color: '#ccc' }}>Press</Link></li>
                <li><Link href="/jobs" style={{ color: '#ccc' }}>Jobs</Link></li>
              </ul>
              <ul className="col-6 col-md-3 col-lg-2 p-2 list-unstyled">
                <li className="gold font-weight-bold" style={{ color: '#daa520' }}>RESOURCES</li>
                <li><Link href="/resource-center" style={{ color: '#ccc' }}>Resource Center</Link></li>
                <li><Link href="/blogs" style={{ color: '#ccc' }}>Blogs</Link></li>
              </ul>
              <ul className="col-6 col-md-2 col-lg-2 p-2 list-unstyled">
                <li className="gold font-weight-bold" style={{ color: '#daa520' }}>SUPPORT</li>
                <li><Link href="/help-center" style={{ color: '#ccc' }}>Help Center</Link></li>
                <li><Link href="/product-status" style={{ color: '#ccc' }}>Product Status</Link></li>
                <li><Link href="/support" style={{ color: '#ccc' }}>Support</Link></li>
              </ul>
              <div className="col-12 col-md-7 col-lg-5 mt-3 p-0">
                <FooterForm />
              </div>
              <div className="col-lg-3 d-none d-lg-block">
                <div className="social-footer d-flex justify-content-center h-100 align-items-center">
                  <a className="social-icon mr-2" href="#" aria-label="Facebook">
                    <i className="fa fa-facebook"></i>
                  </a>
                  <a className="social-icon ml-2" href="https://www.linkedin.com/in/deleep-kumar-504813141/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </div>
              </div>
              <ul className="col-12 col-md-4 col-lg-3 p-2 list-unstyled">
                <li className="gold mb-1 font-weight-bold" style={{ color: '#daa520' }}>CONNECT WITH US</li>
                <li className="mb-2 d-flex align-items-center" itemProp="telephone">
                  <i className="fa fa-phone mr-3" style={{ color: '#ccc' }}></i>
                  <div className="d-flex flex-column">
                    <a href="tel:+919443144719" style={{ color: '#ccc' }}>+91 9443144719</a>
                    <a href="tel:+919585544719" style={{ color: '#ccc' }}>+91 9585544719</a>
                  </div>
                </li>
                <li className="mb-2 d-flex flex-row align-items-center">
                  <i className="fa fa-address-card mr-3" style={{ color: '#ccc' }}></i>
                  <address style={{ color: '#ccc', margin: 0 }}>
                    Jagada Industries <br />
                    3/1224-6, Sattur Road, <br />
                    Virudhunagar - 626002, TN
                  </address>
                </li>
                <li>
                  <i className="fa fa-envelope mr-3" style={{ color: '#ccc' }}></i>
                  <a href="mailto:info@jagadagroup.com" style={{ color: '#ccc', textTransform: 'lowercase' }}>info@jagadagroup.com</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row mb-3">
              <div className="col-12">
                <LocaleSwitcher />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}