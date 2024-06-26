import { Hero } from '@/components/Hero';
import Link from 'next/link';
import shareImg from '../public/images/support-social-card.png';
import Image from 'next/image';
import { Share } from '@/components/Share';
import { BusinessCard } from '@/components/BusinessCard';
import prisma from '@/lib/prisma';

async function BusinessPreview() {
  const businesses = await prisma.business.findMany({
    take: 4,
  });

  return (
    <div className="pad-70">
      <h2 className="portfolio-title section-title text-center">
        Just A Few Of Many Awesome Local Listings
      </h2>
      <div className="col-md-10 offset-md-1 ">
        <div className="row">
          {businesses.map((business) => {
            return (
              <div key={business.id} className="col-md-6">
                <BusinessCard business={business} />
              </div>
            );
          })}
          <div className="see-all-wrapper">
            <Link href="/businesses" className="see-all btn-outline">
              <span />
              See All
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function ShareSection() {
  return (
    <div className="pad-70">
      <h2 className="portfolio-title section-title  text-center">
        Help Spread The Word!
      </h2>
      <div className="col-md-10 offset-md-1 ">
        <p>
          We&apos;re all in this together. Please share this site with anyone
          you know.{' '}
          <b>Encourage local artists, musicians, and business owners to join</b>{' '}
          and tell us how we can support them.{' '}
          <b>Encourage your friends to browse </b> and find new things
          they&apos;ll love and new local things to support!
        </p>
        <div className="social-share-row">
          <Share
            socialConfig={{
              config: {
                url: 'https://supportlocalakron.com',
                quote:
                  "Don't distance yourself from Akron! Join me in continuing to support our local artists, musicians, and businesses.",
                hashtag: 'SupportLocalAkron',
                title: 'Support Local Akron - Show Your Love ❤️',
              },
            }}
          />
          <Image
            className="social-share-image"
            src={shareImg}
            alt="card with logo that encourages sharing the message"
          />
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <div className="herosection">
      <Hero />
      <div className="indexpage">
        <div className="blog-post pad-70">
          <div className="container">
            <BusinessPreview />
            <ShareSection />
            <p className="photo-credit">
              Header Photo Credit:{' '}
              <Link href="http://northsidemarketplace.com/">
                Northside Marketplace
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
