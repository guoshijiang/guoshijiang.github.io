import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";
import Product from "@site/src/components/Product";
import Partner from "@site/src/components/Partner";
import Teams from "@site/src/data/teams";
import Products, { type ProductItem } from "@site/src/data/products";
import Partners, { type PartnerItem } from "@site/src/data/partners";
import Translate, { translate } from "@docusaurus/Translate";
import Typist from "react-typist";

import styles from "./index.module.css";

function TopBanner() {
  return (
    <div className={styles.topBanner}>
      <div className={styles.topBannerTitle}>
        {"🎉\xa0"}
        <Link to="/blog" className={styles.topBannerTitleText}>
          <Translate id="homepage.banner.launch.3.0">
            {"Welcome to join us!"}
          </Translate>
        </Link>
        {"\xa0🥳"}
      </div>
    </div>
  );
}

const HeroContent = ({ title, tagLine }): JSX.Element => {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div className={styles.HeroContent}>
      <h1 className={styles.HeroTitle}>{siteConfig.title}</h1>
      <Typist avgTypingDelay={40} cursor={{ hideWhenDone: true, show: false }}>
        <p className={styles.HeroDescription}>{siteConfig.tagline}</p>
      </Typist>
    </div>
  );
};

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <HeroContent title={siteConfig.title} tagLine={siteConfig.tagline} />
    // <header className={clsx('hero hero--primary', styles.heroBanner)}>
    //   <div className="container">
    //     <Heading as="h1" className="hero__title">
    //       {siteConfig.title}
    //     </Heading>
    //     <p className="hero__subtitle">{siteConfig.tagline}</p>
    //     <div className={styles.buttons}>
    //       <Link
    //         className="button button--secondary button--lg"
    //         to="/docs/intro">
    //         Get Started
    //       </Link>
    //     </div>
    //   </div>
    // </header>
  );
}

function ProductsSection() {
  const productColumns: ProductItem[][] = [[], [], []];
  Products.filter((product) => product.showOnHomepage).forEach((product, i) =>
    productColumns[i % 3]!.push(product)
  );

  return (
    <div className={clsx(styles.section, styles.sectionAlt)}>
      <div className="container">
        <Heading as="h2" className={clsx("margin-bottom--lg", "text--center")}>
          <Translate>👏 Our Products</Translate>
        </Heading>
        <div className={clsx("row", styles.productsSection)}>
          {productColumns.map((productItems, i) => (
            <div className="col col--4" key={i}>
              {productItems.map((product) => (
                <Product {...product} key={product.url} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function PartnersSection() {
  const partnerColumns: PartnerItem[][] = [[], [], []];
  Partners.filter((partner) => partner.showOnHomepage).forEach((partner, i) =>
    partnerColumns[i % 5]!.push(partner)
  );

  return (
    <div className={clsx(styles.section, styles.sectionAlt)}>
      <div className="container">
        <Heading as="h2" className={clsx("margin-bottom--lg", "text--center")}>
          <Translate>🤝 Our Partners</Translate>
        </Heading>
        <div className={clsx("row")}>
          {partnerColumns.map((partnerItems, i) => (
            <div className="col col--4" key={i}>
              {partnerItems.map((partner) => (
                <Partner {...partner} key={partner.url} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function TeamsSection() {
  return (
    <div className={clsx(styles.section)}>
      <div className="container">
        <Heading as="h2" className={clsx("margin-bottom--lg", "text--center")}>
          <Translate>👥 Team Members</Translate>
        </Heading>
        <div className="row">
          {Teams.map((team) => (
            <div className="col" key={team.name}>
              <div className="avatar avatar--vertical margin-bottom--sm">
                <img
                  alt={team.name}
                  className="avatar__photo avatar__photo--xl"
                  src={team.imgUrl}
                  style={{ overflow: "hidden" }}
                  loading="lazy"
                />
                <div className="avatar__intro padding-top--sm">
                  <div className="avatar__name">{team.name}</div>
                  <small className="avatar__subtitle">{team.title}</small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="An infrastructure which support l1 deposit to any l2, any l2 withdraw to l1, any l2 transfer to any l2"
    >
      <TopBanner />
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <ProductsSection />
        <PartnersSection />
        <TeamsSection />
      </main>
    </Layout>
  );
}
