/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable @docusaurus/no-untranslated-text */

import React from 'react';

import type {Props as Tweet} from '../components/Tweet';

export type TweetItem = Tweet & {
  showOnHomepage: boolean;
};

const TWEETS: TweetItem[] = [
  {
    url: '',
    handle: 'seek_web3',
    name: 'guoshijiang',
    date: 'Dec 09, 2023',
    content: (
      <>
        👋 Hello! Welcome to the developer community of bridge alchemy. We'd love to have you stop by!
      </>
    ),
    showOnHomepage: true,
    githubUsername: 'guoshijiang',
  },
  {
    url: '',
    handle: 'arcanis',
    name: 'Maël',
    date: 'Jan 20, 2021',
    content: (
      <>
        I&apos;ve used Docusaurus for two websites this year, and I&apos;ve been
        very happy about the v2. Looks good, and simple to setup.
      </>
    ),
    showOnHomepage: true,
    githubUsername: 'arcanis',
  },
  {
    url: '',
    handle: 'maxlynch',
    name: 'Max Lynch',
    date: 'Mar 25, 2021',
    content: (
      <>
        Docusaurus v2 doubles as a really nice little static site generator tool
        for content-focused sites, love it 👏
      </>
    ),
    showOnHomepage: true,
    githubUsername: 'mlynch',
  },
  {
    url: '',
    handle: 'supabase',
    name: 'Supabase',
    date: 'Nov 18, 2020',
    content: (
      <>
        We&apos;ve been using V2 since January and it has been great - we spend
        less time building documentation and more time building 🛳
        <br />
        <br />
        Thanks <b>@docusaurus</b> team 🦖
      </>
    ),
    showOnHomepage: true,
    githubUsername: 'supabase',
  },
  {
    url: '',
    handle: 'paularmstrong',
    name: 'Paul Armstrong',
    date: 'Apr 27, 2021',
    content: (
      <>
        Continue to be impressed and excited about Docusaurus v2 alpha releases.
        Already using the sidebar items generator to help monorepo workspace
        devs create their own doc pages without any configuration needed.
      </>
    ),
    showOnHomepage: true,
    githubUsername: 'paularmstrong',
  },
  {
    url: '',
    handle: 'theRunCom',
    name: 'theRunCom',
    date: 'Dec 09, 2023',
    content: (
      <>
        <b>Bridge Alchemy</b> ❤️
      </>
    ),
    showOnHomepage: true,
    githubUsername: 'theRunCom',
  },
];

export default TWEETS;