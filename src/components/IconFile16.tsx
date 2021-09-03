/** @jsx h */
import { h, JSX } from 'preact';

export default function IconFile16(props: JSX.SVGAttributes<SVGSVGElement>) {
  const { width = 16, height = 16, viewBox = '0 0 16 16', fill = 'currentColor', ...rest } = props;
  return (
    <svg width={width} height={height} viewBox={viewBox} fill={fill} xmlns="http://www.w3.org/2000/svg" {...rest}>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M2 0.5H9.707L14 4.793V15.5H2V0.5ZM3 1.5V14.5H13V5.5H9V1.5H3ZM10 2.207L12.293 4.5H10V2.207Z" />
    </svg>
  )
}
