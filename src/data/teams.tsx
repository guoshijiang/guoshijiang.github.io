import React from 'react';
import Translate, {translate} from '@docusaurus/Translate';

const Teams = [
  {
    imgUrl: 'https://avatars.githubusercontent.com/u/19474106?v=4',
    name: 'guoshijiang',
    title: translate({
      id: 'homepage.teams.guoshijiang.title',
      message: 'Blockchain developer',
      description: 'Title of teams of guoshijiang on the home page',
    }),
  },
  {
    imgUrl: 'https://avatars.githubusercontent.com/u/16287657?v=4',
    name: 'sailormillet',
    title: translate({
      id: 'homepage.teams.sailormillet.title',
      message: 'Frontend Developer',
      description: 'Title of teams of sailormillet on the home page',
    }),
  },
  {
    imgUrl: 'https://avatars.githubusercontent.com/u/40434934?v=4',
    name: 'xingyaoc',
    title: translate({
      id: 'homepage.teams.xingyaoc.title',
      message: 'Frontend Developer',
      description: 'Title of teams of xingyaoc on the home page',
    }),
  },
  {
    imgUrl: 'https://avatars.githubusercontent.com/u/49315766?v=4',
    name: 'Jack Zhang',
    title: translate({
      id: 'homepage.teams.Jack Zhang.title',
      message: 'Solidity Developer',
      description: 'Title of teams of Jack Zhang on the home page',
    }),
  },{
    imgUrl: 'https://avatars.githubusercontent.com/u/2945287?v=4',
    name: 'jhfnetboy',
    title: translate({
      id: 'homepage.teams.jhfnetboy.title',
      message: 'Backend Developer',
      description: 'Title of teams of jhfnetboy on the home page',
    }),
  },
  {
    imgUrl: 'https://avatars.githubusercontent.com/u/6221737?v=4',
    name: 'benjamintshi',
    title: translate({
      id: 'homepage.teams.benjamintshi.title',
      message: 'Node Developer',
      description: 'Title of teams of benjamintshi on the home page',
    }),
  },
  {
    imgUrl: 'https://avatars.githubusercontent.com/u/35363659?v=4',
    name: 'tiantianlikeu',
    title: translate({
      id: 'homepage.teams.tiantianlikeu.title',
      message: 'Backend Developer',
      description: 'Title of teams of tiantianlikeu on the home page',
    }),
  },
  {
    imgUrl: 'https://avatars.githubusercontent.com/u/61449410?v=4',
    name: 'zpano',
    title: translate({
      id: 'homepage.teams.zpano.title',
      message: 'Solidity Developer',
      description: 'Title of teams of zpano on the home page',
    }),
  },
  {
    imgUrl: 'https://avatars.githubusercontent.com/u/97324405?v=4',
    name: 'shivanshu814',
    title: translate({
      id: 'homepage.teams.shivanshu814.title',
      message: 'frontend Developer',
      description: 'Title of teams of shivanshu814 on the home page',
    }),
  },
  {
    imgUrl: 'https://avatars.githubusercontent.com/u/97324405?v=4',
    name: 'shivanshu814',
    title: translate({
      id: 'homepage.teams.shivanshu814.title',
      message: 'frontend Developer',
      description: 'Title of teams of shivanshu814 on the home page',
    }),
  },
  {
    imgUrl: 'https://avatars.githubusercontent.com/u/150229699?v=4',
    name: 'buildevm',
    title: translate({
      id: 'homepage.teams.buildevm.title',
      message: 'Researcher',
      description: 'Title of teams of buildevm on the home page',
    }),
  },
  {
    imgUrl: 'https://avatars.githubusercontent.com/u/152005203?v=4',
    name: 'abandonsz',
    title: translate({
      id: 'homepage.teams.abandonsz.title',
      message: 'Backend Developer',
      description: 'Title of teams of abandonsz on the home page',
    }),
  },
  {
    imgUrl: 'https://avatars.githubusercontent.com/u/152969444?v=4',
    name: 'KeaneHh',
    title: translate({
      id: 'homepage.teams.abandonsz.title',
      message: 'Backend Developer',
      description: 'Title of teams of abandonsz on the home page',
    }),
  },
  {
    imgUrl: 'https://avatars.githubusercontent.com/u/111177450?v=4',
    name: 'Kenn-eth',
    title: translate({
      id: 'homepage.teams.Kenn-eth.title',
      message: 'Tech Doc Writer',
      description: 'Title of teams of Kenn-eth on the home page',
    }),
  },
  {
    imgUrl: 'https://avatars.githubusercontent.com/u/111177450?v=4',
    name: 'yoyochan7253',
    title: translate({
      id: 'homepage.teams.yoyochan7253.title',
      message: 'Product Manager',
      description: 'Title of teams of yoyochan7253 on the home page',
    }),
  },
  {
    imgUrl: 'https://avatars.githubusercontent.com/u/11959771?v=4',
    name: 'binkerCxb',
    title: translate({
      id: 'homepage.teams.binkerCxb.title',
      message: 'FullStack Developer',
      description: 'Title of teams of binkerCxb on the home page',
    }),
  },
  {
    imgUrl: 'https://avatars.githubusercontent.com/u/61103353?v=4',
    name: 'yucheng-Li',
    title: translate({
      id: 'homepage.teams.yucheng-Li.title',
      message: 'Frontend Developer',
      description: 'Title of teams of yucheng-Li on the home page',
    }),
  },
  {
    imgUrl: 'https://avatars.githubusercontent.com/u/15226641?v=4',
    name: 'liufeihe',
    title: translate({
      id: 'homepage.teams.liufeihe.title',
      message: 'Backend Developer',
      description: 'Title of teams of liufeihe on the home page',
    }),
  },
  {
    imgUrl: 'https://avatars.githubusercontent.com/u/45326345?v=4',
    name: 'karezachen',
    title: translate({
      id: 'homepage.teams.karezachen.title',
      message: 'Backend Developer',
      description: 'Title of teams of karezachen on the home page',
    }),
  },
  {
    imgUrl: 'https://avatars.githubusercontent.com/u/44748591?v=4',
    name: 'JSeasy',
    title: translate({
      id: 'homepage.teams.JSeasy.title',
      message: 'Frontend Developer',
      description: 'Title of teams of JSeasy on the home page',
    }),
  },
  {
    imgUrl: 'https://avatars.githubusercontent.com/u/26481195?v=4',
    name: 'Jomosis',
    title: translate({
      id: 'homepage.teams.Jomosis.title',
      message: 'Developer',
      description: 'Title of teams of Jomosis on the home page',
    }),
  },
  {
    imgUrl: 'https://avatars.githubusercontent.com/u/13994404?v=4',
    name: 'fengshanshan',
    title: translate({
      id: 'homepage.teams.fengshanshan.title',
      message: 'Frontend Developer',
      description: 'Title of teams of fengshanshan on the home page',
    }),
  },
  {
    imgUrl: 'https://avatars.githubusercontent.com/u/40332563?v=4',
    name: 'fengbinwang',
    title: translate({
      id: 'homepage.teams.fengbinwang.title',
      message: 'Frontend Developer',
      description: 'Title of teams of fengbinwang on the home page',
    }),
  },
  {
    imgUrl: 'https://avatars.githubusercontent.com/u/29969410?v=4',
    name: 'csp94',
    title: translate({
      id: 'homepage.teams.csp94.title',
      message: 'Frontend Developer',
      description: 'Title of teams of csp94 on the home page',
    }),
  },
];
export default Teams;
