/** @jsx h */
import { h, JSX } from 'preact';

export default function IconReverse16(props: JSX.SVGAttributes<SVGSVGElement>) {
  const { width = 16, height = 16, viewBox = '0 0 16 16', fill = 'currentColor', ...rest } = props;
  return (
    <svg width={width} height={height} viewBox={viewBox} fill={fill} xmlns="http://www.w3.org/2000/svg" {...rest}>
      <path d="M4 4h8v1H8.5v7h-1V5H4V4zM12 7l2 2-2 2V7zM2 9l2-2v4L2 9z" />
    </svg>
  )
}
