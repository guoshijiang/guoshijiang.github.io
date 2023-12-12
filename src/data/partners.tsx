import React from 'react';

import type {Props as Partner} from '../components/Partner';

export type PartnerItem = Partner & {
  showOnHomepage: boolean;
};

const Partners: PartnerItem[] = [
  {
    url: 'https://avatars.githubusercontent.com/u/106918908?s=96&v=4',
    showOnHomepage: true,
  },
  {
    url: 'https://learnblockchain.cn/css/default/logo.png',
    showOnHomepage: true,
  },
];

export default Partners;
