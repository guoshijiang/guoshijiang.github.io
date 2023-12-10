import React from 'react';

import type {Props as Partner} from '../components/Partner';

export type PartnerItem = Partner & {
  showOnHomepage: boolean;
};

const Partners: PartnerItem[] = [
  {
    url: 'https://cdn.dribbble.com/users/534648/screenshots/7069859/nextdao_2x_4x.jpg',
    showOnHomepage: true,
  },
  {
    url: 'https://moonbeam.network/wp-content/uploads/2021/06/ethsign-500.png',
    showOnHomepage: true,
  },
];

export default Partners;