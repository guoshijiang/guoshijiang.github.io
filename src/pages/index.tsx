import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import Tweet from '@site/src/components/Tweet';
import Tweets, {type TweetItem} from '@site/src/data/tweets';
import Translate, {translate} from '@docusaurus/Translate';
import Typist from 'react-typist';

import styles from './index.module.css';

function TopBanner() {
  return (
    <div className={styles.topBanner}>
      <div className={styles.topBannerTitle}>
        {'🎉\xa0'}
        <Link to="/blog" className={styles.topBannerTitleText}>
          <Translate id="homepage.banner.launch.3.0">
            {'Welcome to join us!'}
          </Translate>
        </Link>
        {'\xa0🥳'}
      </div>
    </div>
  );
}

const HeroContent = ({ title, tagLine }): JSX.Element => {
  const {siteConfig} = useDocusaurusContext();
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
  const {siteConfig} = useDocusaurusContext();
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

function TweetsSection() {
  const tweetColumns: TweetItem[][] = [[], [], []];
  Tweets.filter((tweet) => tweet.showOnHomepage).forEach((tweet, i) =>
    tweetColumns[i % 3]!.push(tweet),
  );

  return (
    <div className={clsx(styles.section, styles.sectionAlt)}>
      <div className="container">
        <Heading as="h2" className={clsx('margin-bottom--lg', 'text--center')}>
          <Translate>💬 Messages from Team Members</Translate>
        </Heading>
        <div className={clsx('row', styles.tweetsSection)}>
          {tweetColumns.map((tweetItems, i) => (
            <div className="col col--4" key={i}>
              {tweetItems.map((tweet) => (
                <Tweet {...tweet} key={tweet.url} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="An infrastructure which support Ethereum deposit to any layer2, any layer2 withdraw to Ethereum, any layer2 transfer to any layer2">
      <TopBanner />
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <TweetsSection />
      </main>
    </Layout>
  );
}
