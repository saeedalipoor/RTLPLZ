/** @jsx h */
import clsx from 'clsx';
import jss from 'jss';
import jssPluginCamelCase from 'jss-plugin-camel-case';
import jssPluginNested from 'jss-plugin-nested';
import { ComponentChildren, h, JSX } from 'preact';
import { useCallback } from 'preact/hooks';
import { OnValueChange, Props } from './types';


const ITEM_ID_DATA_ATTRIBUTE_NAME = 'data-tabs-item-id'

export type TabsProps<Name extends string> = {
  name?: Name
  onChange?: OmitThisParameter<JSX.GenericEventHandler<HTMLInputElement>>
  onValueChange?: OnValueChange<string, Name>
  options: Array<TabsOption>
  propagateEscapeKeyDown?: boolean
  value: null | string
}
export type TabsOption = {
  children?: ComponentChildren
  text?: preact.ComponentChildren
  value: string,
  className?: string
  onClick?: (e: MouseEvent) => void
}


jss.use(
  jssPluginNested(),
  jssPluginCamelCase()
);

const { classes } = jss
  .createStyleSheet({
    root: {
      flexGrow: 1,
      display: 'flex',
      flexDirection: 'column',
      maxHeight: '100%',
      overflow: 'hidden'
    },
    tabs: {
      position: 'sticky',
      top: 0,
      flexShrink: 0,
      zIndex: 'var(--z-index-1)',
      backgroundColor: 'var(--color-white)',
      display: 'flex',
      paddingLeft: 'var(--space-extra-small)',
      paddingRight: 'var(--space-extra-small)',
      borderBottom: '1px solid var(--color-silver)',
      overflow: 'auto hidden',
      '&::-webkit-scrollbar': {
        display: 'none'
      },
    },
    label: {
      padding: 'var(--space-small) var(--space-extra-small)',
      color: 'var(--color-black-30)',
      whiteSpace: 'nowrap',
      '&:hover': {
        color: 'var(--color-black-80)',
      }
    },

    input: {
      display: 'block',
      width: 0,
      height: 0,
      '&:checked ~ $value': {
        color: 'var(--color-black-80)',
        'font-weight': 'var(--font-weight-bold)',
      }
    },
    value: {},
    content: {
      flexGrow: 1,
      position: 'relative',
      overflow: 'hidden'
    }
  })
  .attach()

function Tabs<Name extends string>({
  name,
  onChange = function () { },
  onValueChange = function () { },
  options,
  propagateEscapeKeyDown = true,
  value,
  className,
  ...rest
}: Props<HTMLInputElement, TabsProps<Name>>): JSX.Element {
  const handleChange = useCallback(
    function (event: JSX.TargetedEvent<HTMLInputElement>): void {
      const id = event.currentTarget.getAttribute(
        ITEM_ID_DATA_ATTRIBUTE_NAME
      ) as string
      const newValue = options[parseInt(id, 10)].value
      onValueChange(newValue, name)
      onChange(event)
    },
    [name, onChange, onValueChange, options]
  )

  const handleKeyDown = useCallback(
    function (event: JSX.TargetedKeyboardEvent<HTMLInputElement>): void {
      if (event.key !== 'Escape') {
        return
      }
      if (propagateEscapeKeyDown === false) {
        event.stopPropagation()
      }
      event.currentTarget.blur()
    },
    [propagateEscapeKeyDown]
  )

  const activeOption = options.find(function (option: TabsOption): boolean {
    return option.value === value
  })

  return (
    <div class={classes.root}>
      <div class={clsx(classes.tabs, className)}>
        {options.map(function (option: TabsOption, index: number): JSX.Element {
          if (!option.children) return (
            <label key={index} class={clsx(classes.label, option.className)} onClick={option.onClick}>
              <div class={classes.value}>{option.text || option.value}</div>
            </label>
          );
          return (
            <label key={index} class={clsx(classes.label, option.className)}>
              <input
                {...rest}
                checked={value === option.value}
                class={classes.input}
                name={name}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                tabIndex={0}
                type="radio"
                value={option.value}
                {...{ [ITEM_ID_DATA_ATTRIBUTE_NAME]: `${index}` }}
              />
              <div class={classes.value}>{option.text || option.value}</div>
            </label>
          )
        })}
      </div>
      {typeof activeOption === 'undefined' ? null : <div class={classes.content}>{activeOption.children}</div>}
    </div>
  )
}

export default Tabs;