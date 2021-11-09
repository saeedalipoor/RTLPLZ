/** @jsx h */

import clsx from 'clsx';
import jss from 'jss';
import jssPluginCamelCase from 'jss-plugin-camel-case';
import jssPluginNested from 'jss-plugin-nested';
import { ComponentChildren, h, JSX } from 'preact';
import { useCallback } from 'preact/hooks';
import { OnValueChange, Props } from './types';


jss.use(
  jssPluginNested(),
  jssPluginCamelCase()
);

const { classes } = jss
  .createStyleSheet({
    root: {
      display: 'flex',
      gap: '8px',
      '&, & *': {
        cursor: 'pointer'
      }
    },
    checkbox: {
      flexShrink: 0
    },
    input: {
      position: 'absolute',
      visibility: 'hidden',
      '&:checked ~ $checkbox': {
        '& $bg': {
          fill: "#18a0fb",
          strokeWidth: 0
        },
        '& $check': {
          transform: 'scale(1)'
        }
      }
    },
    bg: {
      backgroundColor: 'transparent',
      borderRadius: '2px',
      stroke: '#a8a8a8',
      strokeWidth: 1
    },
    check: {
      fill: "#f0f0f0",
      transform: 'scale(0)',
      transition: 'all linear 0.1s',
      transformOrigin: 'center'
    },
    content: {
      flexGrow: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: '4px',
    }
  })
  .attach()

function Checkbox<Name extends string>({
  id,
  children,
  disabled = false,
  name,
  class: className,
  onChange = function () { },
  onValueChange = function () { },
  propagateEscapeKeyDown = true,
  value = false,
  noCheckbox,
  ...rest
}: Props<HTMLInputElement, CheckboxProps<Name>>): JSX.Element {
  const handleChange = useCallback(
    function (event: JSX.TargetedEvent<HTMLInputElement>): void {
      const newValue = event.currentTarget.checked
      onValueChange(newValue, name)
      onChange(event)
    },
    [name, onChange, onValueChange]
  )
  return (
    <label for={id} class={clsx(className, classes.root)}>
      <input type="checkbox" id={id} class={classes.input} checked={value} onChange={handleChange} />
      {!noCheckbox &&
        <svg class={classes.checkbox} width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17">
          <rect class={classes.bg} x=".922" y=".322" width="16" height="16" rx="2" />
          <path class={classes.check} fill-rule="evenodd" clip-rule="evenodd" d="M5.627 6.95l2.197 2.196 4.392-4.392 1.372 1.372-5.764 5.765-3.57-3.569L5.628 6.95z" />
        </svg>
      }
      {children && <div class={classes.content}>{children}</div>}
    </label>
  )
}


export type CheckboxProps<Name extends string> = {
  id?: string
  children?: ComponentChildren
  disabled?: boolean
  noCheckbox?: boolean
  name?: Name
  onChange?: OmitThisParameter<JSX.GenericEventHandler<HTMLInputElement>>
  onValueChange?: OnValueChange<boolean, Name>
  propagateEscapeKeyDown?: boolean
  value: boolean
}
export default Checkbox;