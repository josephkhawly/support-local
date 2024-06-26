import Link from 'next/link';
import logoImg from '../public/images/support-akron-logo.png';
import Image from 'next/image';

export default function Footer() {
  return (
    <section className="footer-wrapper pad-20">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 text-center">
            <Link href="/" className="brand-logo">
              <Image
                src={logoImg}
                alt="brand logo"
                style={{ height: 'auto' }}
              />
            </Link>
            <p className="copyright">
              <a href="mailto:kirsten@creativeeye.design">
                Built With{' '}
                <span aria-label="heart" role="img">
                  ❤️
                </span>{' '}
                By <b>Byron + Kirsten Delpinal</b>
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
