/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, {type ReactNode} from 'react';

import clsx from 'clsx';

import Link from '@docusaurus/Link';
import styles from './styles.module.css';

export interface Props {
  url: string;
  name: string;
  content: ReactNode;
  imgUrl: string;
}

export default function Product({
  url,
  name,
  content,
  imgUrl,
}: Props): JSX.Element {
  return (
    <div className={clsx('card', styles.product)}>
      <div className="card__header">
        <div className="avatar">
          <img
            alt={name}
            className="avatar__photo"
            src={imgUrl}
            width="48"
            height="48"
            loading="lazy"
          />
          <div className={clsx('avatar__intro', styles.productMeta)}>
            <strong className="avatar__name">{name}</strong>
          </div>
        </div>
      </div>

      <div className={clsx('card__body', styles.product)}>{content}</div>

      <div className="card__footer">
        <Link className={clsx(styles.productMeta, styles.productDate)} to={url}></Link>
      </div>
    </div>
  );
}
