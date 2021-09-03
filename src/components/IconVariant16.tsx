/** @jsx h */
import { h, JSX } from 'preact';

export default function IconVariant16(props: JSX.SVGAttributes<SVGSVGElement>) {
  const { width = 16, height = 16, viewBox = '0 0 16 16', fill = 'currentColor', ...rest } = props;
  return (
    <svg width={width} height={height} viewBox={viewBox} fill={fill} xmlns="http://www.w3.org/2000/svg" {...rest}>
      <path d="M3 7.793L7.793 3L12.586 7.793L7.793 12.586L3 7.793Z" />
    </svg>
  )
}