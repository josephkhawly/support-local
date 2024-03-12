import Image from "next/image";
import Link from "next/link";

export function BusinessCard({ business }: any) {
  const MAX_LENGTH_TITLE = 80;

  return (
    <article className="blog-listing" key={business.urlName}>
      <div className="entry-meta-content">
        <div className="entry-media">
          <Link href={business.urlName}>
            <Image src={business.image} alt={`${business.name} logo`} width={500} height={200} />
          </Link>
        </div>
        <h2 className="entry-title">
          <Link href={business.urlName}>
            {' '}
            {business.name > MAX_LENGTH_TITLE
              ? business.name
              : business.name.substring(0, MAX_LENGTH_TITLE)}{' '}
          </Link>
        </h2>
        <p className="business-type">{business.type}</p>
        <div className="entry-content">
          {business.supportSummary}
        </div>
      </div>

      <div className="entry-content-bottom">
        <Link href={business.urlName} className="entry-read-more">
          <span />
          Support
        </Link>
      </div>
    </article>
  );
}
