import { JSX, RenderableProps } from 'preact'

export type OnValueChange<Value, Name extends string> = (
  newValue: Value,
  name?: Name
) => void

export type Props<
  Target extends EventTarget = EventTarget,
  ComponentProps = Record<string, never>
  > = RenderableProps<
    Omit<JSX.HTMLAttributes<Target>, keyof ComponentProps> & ComponentProps
  >

export type Alignment = 'left' | 'center' | 'right'

export type HTMLProps<Props, RefType extends EventTarget = EventTarget> = Omit<
  JSX.HTMLAttributes<RefType>,
  keyof Props
> &
  Props

export type OnChange = (
  state?: any,
  value?: any,
  name?: string,
  event?: Event
) => void | Promise<void>
export type OnSelectedFiles = (
  files?: Array<File>,
  event?: Event
) => void | Promise<void>

export type Option = OptionHeader | OptionValue | OptionSeparator
export interface OptionHeader {
  id?: null | string
  header: string
}
export interface OptionValue {
  id?: null | string
  value: string
}
export interface OptionSeparator {
  id?: null | string
  separator: true
}

export type Space = 'extraSmall' | 'small' | 'medium' | 'large' | 'extraLarge'