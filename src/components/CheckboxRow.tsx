/** @jsx h */

import clsx from 'clsx';
import jss from 'jss';
import jssPluginCamelCase from 'jss-plugin-camel-case';
import jssPluginNested from 'jss-plugin-nested';
import { ComponentChildren, h, JSX } from 'preact';
import Checkbox from './Checkbox';
import { OnValueChange, Props } from './types';


jss.use(
  jssPluginNested(),
  jssPluginCamelCase()
);

const { classes } = jss
  .createStyleSheet({
    root: {
      padding: 12,
      cursor: 'pointer',
      '&:not(:last-child)': {
        borderBottom: '1px solid var(--color-silver)'
      },
      '&.disabled':{
        opacity: 0.45,
        pointerEvents: 'none'
      }
    },
    description: {
      color: 'var(--color-black-30)'
    }
  })
  .attach()

function CheckboxRow<Name extends string>({
  id,
  children,
  label,
  description,
  value = false,
  class: className,
  ...rest
}: Props<HTMLInputElement, CheckboxRowProps<Name>>): JSX.Element {
  return (

    <Checkbox id={id} value={value} class={clsx(className, classes.root, { 'disabled': rest.disabled })} {...rest}>
      <strong>{label}</strong>
      {description && <div class={classes.description}>{description}</div>}
    </Checkbox>

  )
}


export type CheckboxRowProps<Name extends string> = {
  id: string
  children?: ComponentChildren
  disabled?: boolean
  name?: Name
  description?: ComponentChildren
  label: ComponentChildren
  onChange?: OmitThisParameter<JSX.GenericEventHandler<HTMLInputElement>>
  onValueChange?: OnValueChange<boolean, Name>
  propagateEscapeKeyDown?: boolean
  value: boolean
  noCheckbox?: boolean
}
export default CheckboxRow;