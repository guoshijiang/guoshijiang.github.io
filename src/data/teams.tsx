import React from 'react';
import Translate, {translate} from '@docusaurus/Translate';

const Teams = [
  {
    imgUrl: 'https://avatars.githubusercontent.com/u/19474106?v=4',
    name: 'guoshijiang',
    title: translate({
      id: 'homepage.teams.guoshijiang.title',
      message: 'Owner',
      description: 'Title of teams of guoshijiang on the home page',
    }),
  },
  {
    imgUrl: 'https://avatars.githubusercontent.com/u/40434934?v=4',
    name: 'xingyaoc',
    title: translate({
      id: 'homepage.teams.xingyaoc.title',
      message: 'Developer',
      description: 'Title of teams of xingyaoc on the home page',
    }),
  },
  {
    imgUrl: 'https://avatars.githubusercontent.com/u/49315766?v=4',
    name: 'Jack Zhang',
    title: translate({
      id: 'homepage.teams.Jack Zhang.title',
      message: 'Developer',
      description: 'Title of teams of Jack Zhang on the home page',
    }),
  },
];

export default Teams;