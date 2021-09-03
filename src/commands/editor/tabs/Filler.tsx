/** @jsx h */

import { MiddleAlign } from '@create-figma-plugin/ui';
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
      backgroundColor: "#F1F1F1",
      fontSize: '1rem',
      color: '#989898'
    }
  })
  .attach()

function Filler(): JSX.Element {
  return (
    <div class={classes.root}>
      <MiddleAlign>Coming so👀on</MiddleAlign>
    </div>
  )
}

export default Filler;