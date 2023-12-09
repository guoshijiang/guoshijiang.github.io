/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable @docusaurus/no-untranslated-text */

import React from 'react';

import type {Props as Product} from '../components/Product';

export type ProductItem = Product & {
  showOnHomepage: boolean;
};

const Products: ProductItem[] = [
  {
    url: 'https://github.com/bridge-alchemy/acorus',
    name: 'acorus',
    content: (
      <>
        All layer2 chain l1 to l2 deposit, l2 to l1 withdraw transactions data indexer
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
        Wrap all layer2 bridge contract support transfer ETH, Erc20 token and Nft etc from this layer2 to another layer2
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
        Layer2 cross-chain bridge ui, support l1 to l2 deposit, l2 to l1 withdraw, transfer from this l2 to another l2
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
        L2 to L2 transfer bridge relayer
      </>
    ),
    showOnHomepage: true,
    imgUrl: "img/logo.png",
  },
];

export default Products;