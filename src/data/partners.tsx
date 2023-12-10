import React from 'react';

import type {Props as Partner} from '../components/Partner';

export type PartnerItem = Partner & {
  showOnHomepage: boolean;
};

const Partners: PartnerItem[] = [
  {
    url: 'https://branditechture.agency/brand-logos/wp-content/uploads/2022/08/MANTRA-DAO-1024x709.png',
    showOnHomepage: true,
  },
  {
    url: 'https://moonbeam.network/wp-content/uploads/2021/06/ethsign-500.png',
    showOnHomepage: true,
  },
];

export default Partners;