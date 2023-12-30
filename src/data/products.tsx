import React from 'react';

import type {Props as Product} from '../components/Product';

import Translate from '@docusaurus/Translate';

export type ProductItem = Product & {
  showOnHomepage: boolean;
};

const Products: ProductItem[] = [
  {
    url: 'https://github.com/bridge-alchemy/acorus',
    name: 'acorus',
    content: (
      <>
        <Translate>
          All layer2 chain l1 to l2 deposit, l2 to l1 withdraw transactions data indexer
        </Translate>
      </>
    ),
    showOnHomepage: true,
    imgUrl: "img/logo.png",
  },
  {
    url: 'https://github.com/bridge-alchemy/wrap-bridge',
    name: 'wrap-bridge',
    content: (
      <>
        <Translate>
          Wrap all layer2 bridge contract support transfer ETH, Erc20 token and Nft etc from this layer2 to another layer2
        </Translate>
      </>
    ),
    showOnHomepage: true,
    imgUrl: "img/logo.png",
  },
  {
    url: 'https://github.com/bridge-alchemy/acorus-bridge',
    name: 'acorus-bridge',
    content: (
      <>
        <Translate>
          Layer2 cross-chain bridge ui, support l1 to l2 deposit, l2 to l1 withdraw, transfer from this l2 to another l2
        </Translate>
      </>
    ),
    showOnHomepage: true,
    imgUrl: "img/logo.png",
  },
  {
    url: 'https://github.com/bridge-alchemy/selaginella',
    name: 'selaginella',
    content: (
      <>
        <Translate>
          L2 to L2 transfer bridge relayer
        </Translate>
      </>
    ),
    showOnHomepage: true,
    imgUrl: "img/logo.png",
  },
];

export default Products;