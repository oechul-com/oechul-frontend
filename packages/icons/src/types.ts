import { SVGAttributes } from 'react';

export type IconProps = {
  size?: number;
  width?: number;
  height?: number;
  fill?: string;
  stroke?: string;
  type?: 'fill' | 'stroke';
} & SVGAttributes<SVGElement>;
