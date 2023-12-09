import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Cross-chain Deposit',
    Svg: require('@site/static/img/undraw_team_up.svg').default,
    description: (
      <>
          Ethereum deposit to any layer2
      </>
    ),
  },
  {
    title: 'Cross-chain Withdraw',
    Svg: require('@site/static/img/undraw_team_up.svg').default,
    description: (
      <>
          Any layer2 withdraw to Ethereum
      </>
    ),
  },
  {
    title: 'Cross-chain Transfer',
    Svg: require('@site/static/img/undraw_content_team.svg').default,
    description: (
      <>
          Any layer2 transfer to any layer2.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
