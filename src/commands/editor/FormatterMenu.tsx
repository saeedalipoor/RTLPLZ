/** @jsx h */

import { IconCross32, Text } from '@create-figma-plugin/ui';
import { digitsFaToEn, numberToWords } from "@persian-tools/persian-tools";
import clsx from 'clsx';
import jss from 'jss';
import jssPluginCamelCase from 'jss-plugin-camel-case';
import jssPluginNested from 'jss-plugin-nested';
import { Fragment, h, JSX } from 'preact';
import { Props } from '../../components/types';

jss.use(
  jssPluginNested(),
  jssPluginCamelCase()
);

const { classes } = jss
  .createStyleSheet({
    root: {
      borderTop: '1px solid#e5e5e5',
      backgroundColor: '#f7f7f7',
      padding: '10px 16px 0',
    },
    buttons: {
      display: 'flex',
      overflow: 'auto hidden',
      gap: '8px',
      padding: '10px 16px',
      margin: '4px -16px 0'
    },
    button: {
      position: 'relative',
      zIndex: 1,
      fontFamily: 'IRANSans, var(--font-family)',
      flexShrink: 0,
      borderRadius: 'var(--border-radius-6)',
      border: '1px solid',
      padding: '0 14px',
      lineHeight: '31px',
      height: '32px',
      cursor: 'pointer'
    }
  })
  .attach()

function FormatterMenu({ string: string, className, ['class']: clsname, onSelect, onClose, ...rest }: Props<HTMLDivElement, { string: string, onClose?: () => void, onSelect?: (value: string) => void }>): JSX.Element {
  if (!string || !string.trim()) return <Fragment />;
  const raw = isNaN(Number(string)) ? digitsFaToEn(string).toString().replace(/[^\d]/g, '') : Number(string).toString()// || wordsToNumber(string.replace(/^(هزار)/, 'یک هزار')).toString();
  if (!raw || !raw.trim() || isNaN(Number(raw))) return <Fragment />;
  const formatters = [
    (string: string): string => Number(digitsFaToEn(string)).toLocaleString(),
    (string: string): string => digitsFaToEn(string),
    (string: string): string => Number(string).toLocaleString('fa-ir'),
    (string: string): string => Number(string).toLocaleString('fa-ir', { useGrouping: false }),
    (string: string): string => {
      let result;
      try {
        result = numberToWords(string)
      } catch (e) {
        result = ''
      }
      return result as string
    },
  ]
  return (
    <div class={clsx(className, clsname, classes.root)} {...rest}>
      <Text>Format Selected Number to:</Text>

      {onClose && <IconCross32 style={{ position: 'absolute', right: 0, top: 0, cursor: 'pointer' }} onClick={() => onClose()} />}

      <div class={classes.buttons}>
        {formatters.map(fn => {
          if (fn(raw) === string || !fn(raw).length) return null;
          return (
            <button class={classes.button} onClick={() => onSelect?.(fn(raw))}>{fn(raw)}</button>
          )
        })}
      </div>
    </div>
  )
}

export default FormatterMenu;