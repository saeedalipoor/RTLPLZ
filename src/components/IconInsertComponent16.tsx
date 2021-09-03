/** @jsx h */
import { h, JSX } from 'preact';

export default function IconInsertComponent16(props: JSX.SVGAttributes<SVGSVGElement>) {
  const { width = 16, height = 16, viewBox = '0 0 16 16', fill = 'currentColor', ...rest } = props;
  return (
    <svg width={width} height={height} viewBox={viewBox} fill={fill} xmlns="http://www.w3.org/2000/svg" {...rest}>
      <path d="M7.54999 10.5455V8.45H5.45456V7.55H7.54999V5.45454H8.44999V7.55H10.5455V8.45H8.44999V10.5455H7.54999Z" />
      <path fill-rule="evenodd" clip-rule="evenodd" d="M1 8L8 15L15 8L8 1L1 8ZM13.7272 8L8 13.7272L2.27279 8L8 2.27279L13.7272 8Z" />
    </svg>
  )
}