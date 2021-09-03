/** @jsx h */

import clsx from 'clsx';
import jss from 'jss';
import jssPluginCamelCase from 'jss-plugin-camel-case';
import jssPluginNested from 'jss-plugin-nested';
import { h, JSX } from 'preact';

jss.use(
  jssPluginNested(),
  jssPluginCamelCase()
);

const { classes } = jss
  .createStyleSheet({
    root: {
      fontSize: '0.6rem',
      padding: '5px',
      background: '#f7f7f7',
      textAlign: 'center',
      color: '#2c2c2c',
      display: 'flex',
      gap: '8px',
      alignItems:'center',
      justifyContent: 'center',
      flexWrap: 'wrap'
    }
  })
  .attach()


function StatusBar(props: JSX.HTMLAttributes<HTMLDivElement>): JSX.Element {
  const { className, children } = props;
  return (
    <div class={clsx(classes.root, className)}>
      {children}
    </div>
  )
}

export default StatusBar;