/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { type ReactNode } from "react";

import clsx from "clsx";

export interface Props {
  url: string;
}

export default function Partner({ url }: Props): JSX.Element {
  return (
    <div className={clsx("card")}>
      <div className={clsx("card__body")}>
        <img
          src={url}
          width="400"
          height="200"
          loading="lazy"
        />
      </div>
    </div>
  );
}
