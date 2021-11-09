/** @jsx h */

import { IconControlChevronDown8 } from '@create-figma-plugin/ui';
import clsx from 'clsx';
import jss from 'jss';
import jssPluginCamelCase from 'jss-plugin-camel-case';
import jssPluginNested from 'jss-plugin-nested';
import { ComponentChildren, h, JSX, RefObject } from 'preact';
import { forwardRef } from 'preact/compat';
import { useCallback, useLayoutEffect, useRef } from 'preact/hooks';
import { defaultPlaceholder } from '../constants';
import { mergerefs } from '../utils';
import is from '../utils/is';
import { Props } from './types';

jss.use(
  jssPluginNested(),
  jssPluginCamelCase()
);

const { classes } = jss
  .createStyleSheet({
    root: {
      flexShrink: 0,
      color: '#c6c6c6',
      marginBottom: '1px',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      boxShadow: '0 -1px var(--color-black-10)',
      lineHeight: '1.7',
      fontFamily: '"IRANSans", Tahoma, Geneva, Verdana, sans-serif',
      fontWeight: 400,
      fontSize: '1.05rem',
      '&:first-child,&:only-child': {
        boxShadow: 'none'
      },
      '&:focus-within, &.active': {
        outline: '1px solid #009efe',
        outlineOffset: '-2px',
      },
      '&:focus-within,&.active,&:only-child': {
        '& $textarea': {
          opacity: 1,
          color: 'var(--color-hud)',
        }
      },
      '& $textarea': {
        opacity: 0.8,
        '&::placeholder': {
          color: 'var(--color-black-30)',
        }
      },
      '&:last-child': {
        marginBottom: 0
      },
      '&:only-child': {
        flexGrow: 1,
        outline: 'none !important'
      }
    },
    sizer: {
      display: 'inline-grid',
      alignItems: 'stretch',
      position: 'relative',
      flexGrow: '1',
      '&::after, & $textarea': {
        outline: 'none',
        padding: 'var(--space-medium)',
        width: 'auto',
        minWidth: '1em',
        gridArea: '1 / 1',
        font: 'inherit',
        resize: 'none',
        background: 'none',
        appearance: 'none',
        border: 'none',
        overflow: 'hidden',
      },
      '&::after': {
        content: 'attr(data-value)',
        visibility: 'hidden',
        whiteSpace: 'pre-wrap',
      },
      '&.with-label': {
        '&::after, & $textarea': {
          paddingTop: '28px'
        }
      }
    },
    textarea: {
      cursor: 'text',
    },
    label: {
      display: 'flex',
      alignItems: 'baseline',
      gap: '2px',
      fontSize: '11px',
      position: 'absolute',
      left: '0',
      right: '0',
      top: '0',
      padding: '8px var(--space-medium) 0',
      color: 'var(--color-black-30)',
      '& svg': {
        flexShrink: '0',
        marginRight: 8
      },
      '& span': {
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      }
    },
    extras: {
      position: 'absolute',
      left: 2,
      top: 0,
      width: 16,
      height: 26,
      '&:not(:hover)>div': {
        display: 'none'
      },
      '&>div': {
        position: 'absolute',
        top: '100%',
        backgroundColor: '#fff'
      },
    },
    action: {
      whiteSpace: 'nowrap',
      fontSize: '9.6px',
      padding: '6px',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center'
    },
    bottomActions: {
      display: 'flex',
      alignItems: 'center',
      position: 'fixed',
      bottom: 0,
      zIndex: 2,
      left: 0,
      padding: '0 2px',
      backgroundColor: '#f7f7f7c9',
      '&:hover':{
        right: 0
      }
    }
  })
  .attach()


type TextFieldProps = {
  label?: string | ComponentChildren
  empty?: boolean
  active?: boolean
  extraActions?: { onClick: (value: string) => void, label: string | JSX.Element }[]
  bottomActions?: { onClick: (e: MouseEvent) => void, label: string | JSX.Element }[]
}

const TextField = forwardRef((props: Props<HTMLTextAreaElement, TextFieldProps>, ref): JSX.Element => {
  const { value, label, empty, placeholder, active, extraActions, bottomActions, className, ['class']: clsName, onInput, ...rest } = props;
  const inputRef: RefObject<HTMLTextAreaElement> | null = useRef(null)
  const handleInput = useCallback(
    (e: JSX.TargetedEvent<HTMLTextAreaElement>) => {
      if (e.currentTarget.parentElement) e.currentTarget.parentElement.dataset.value = e.currentTarget.value;
      e.currentTarget.dir = is.rtl(e.currentTarget.value.split("").find(c => !(is.bracket(c) || is.neutral(c) || is.faArDigit(c) || c.match(/[0-9]/g))) || '') ? 'rtl' : 'ltr'
      // @ts-ignore
      onInput?.(e);
    },
    [onInput],
  )

  useLayoutEffect(() => {
    if (inputRef.current && inputRef.current !== document.activeElement) {
      if (inputRef.current.value !== value) {
        inputRef.current.value = String(value);
        inputRef.current.dir = is.rtl(String(value)?.split("").find(c => !(is.bracket(c) || is.neutral(c) || is.faArDigit(c) || c.match(/[0-9]/g))) || '') ? 'rtl' : 'ltr'
      }
      if (active && inputRef.current && !document.hasFocus()) {
        inputRef.current.scrollIntoView();
      }
    }
  }, [active, value, inputRef])
  return (
    <div class={clsx(className, clsName, classes.root, { active })} onClick={() => inputRef.current?.focus()}>
      {label &&
        <label className={classes.label}>
          <svg class="svg" width="10" height="10" viewBox="0 0 10 10"><path d="M0 0h10v3H9V1H5.5v8H7v1H3V9h1.5V1H1v2H0V0z" fill-rule="nonzero" fill="currentColor" /></svg>
          {label}
        </label>
      }
      <div class={clsx(classes.sizer, { 'with-label': !!label })} data-value={empty ? '' : value}>
        <textarea
          rows={1}
          class={classes.textarea}
          onInput={handleInput}
          ref={mergerefs(inputRef, ref)}
          placeholder={placeholder || defaultPlaceholder}
          {...rest}
        />
      </div>
      {extraActions &&
        <div class={classes.extras}>
          <IconControlChevronDown8 style={{ margin: '10px 4px' }} />
          <div>
            {extraActions.map(action => (
              <button class={classes.action} onClick={() => {
                if (inputRef.current) {
                  action.onClick(inputRef.current.value)
                }
              }}>{action.label}</button>
            ))}
          </div>
        </div>
      }
      {bottomActions &&
        <div class={classes.bottomActions}>
          {bottomActions.map(action => (
            <div onClick={action.onClick}>{action.label}</div>
          ))}
        </div>
      }
    </div>
  )
})
export default TextField;

