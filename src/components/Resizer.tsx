/** @jsx h */

import clsx from 'clsx';
import jss from "jss";
import jssPluginCamelCase from 'jss-plugin-camel-case';
import jssPluginNested from 'jss-plugin-nested';
import { h, JSX } from 'preact';
import { useCallback, useEffect, useRef } from 'preact/hooks';
import { windowSize } from '../constants';
import { emit } from '../utils';
import { Props } from './types';
jss.use(
  jssPluginNested(),
  jssPluginCamelCase()
);

const { classes } = jss.createStyleSheet({
  root: {
    cursor: 'nwse-resize',
    position: 'fixed',
    zIndex: 100,
    bottom: 0,
    right: 0,
    width: 10,
    height: 10,
    background: `url("data:image/svg+xml,%3Csvg width='10' height='10' viewBox='0 0 10 10' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cline x1='5.40839' y1='9.40645' x2='9.40839' y2='5.40645' stroke='%23666666'/%3E%3Cline x1='1.77164' y1='9.40646' x2='9.4084' y2='1.7697' stroke='%23666666'/%3E%3C/svg%3E%0A")`
  }

}).attach()

function Resizer({ className, ...props }: Props<HTMLDivElement>) {
  const resizer: preact.RefObject<HTMLDivElement> = useRef(null)
  const resetWindow = useCallback(() => {
    if (
      window.innerWidth < windowSize.initial.width + 10 && window.innerWidth > windowSize.initial.width - 10
      &&
      window.innerHeight < windowSize.initial.height + 10 && window.innerHeight > windowSize.initial.height - 10
    ) {
      emit("RESIZE_WINDOW", windowSize.minimized)
    } else {
      emit("RESIZE_WINDOW", windowSize.initial)
    }

  }, [])
  const resizeWindow: (args: any) => any = useCallback((e: JSX.TargetedMouseEvent<HTMLDivElement>) => {
    const size = {
      width: Math.min(windowSize.max.width, Math.max(140, Math.floor(e.clientX + 5))),
      height: Math.min(windowSize.max.height, Math.max(100, Math.floor(e.clientY + 5)))
    };
    emit("RESIZE_WINDOW", size)
  }, [])

  useEffect(() => {
    if (resizer.current) {
      resizer.current.ondblclick = resetWindow;
      resizer.current.onpointerdown = (e) => {
        if (resizer.current) {
          resizer.current.onpointermove = resizeWindow;
          resizer.current.setPointerCapture(e.pointerId);
        }
      };
      resizer.current.onpointerup = (e) => {
        if (resizer.current) {
          resizer.current.onpointermove = null;
          resizer.current.releasePointerCapture(e.pointerId);
        }
      };
    }
    return () => {
      if (resizer.current) {
        resizer.current.onpointerdown = null
        resizer.current.onpointerup = null
        resizer.current.ondblclick = null
      }
    }
  }, [])
  return (
    <div ref={resizer} className={clsx(classes.root, className)} {...props} title="Double-click to minimize or reset" />
  )
}

export default Resizer;