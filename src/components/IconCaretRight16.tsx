/** @jsx h */
import { h, JSX } from 'preact';

export default function IconCaretRight16(props: JSX.SVGAttributes<SVGSVGElement>) {
  const { width = 16, height = 16, viewBox = '0 0 16 16', fill='currentColor', ...rest } = props;
  return (
    <svg width={width} height={height} viewBox={viewBox} fill={fill} xmlns="http://www.w3.org/2000/svg" {...rest}>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M10 8L6 5V11L10 8Z" />
    </svg>
  )
}