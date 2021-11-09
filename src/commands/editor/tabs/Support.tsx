/** @jsx h */

import { Divider, Text, VerticalSpace } from '@create-figma-plugin/ui';
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
      overflowY: 'auto',
      position: 'relative',
      height: '100%'
    },
    flexCol: {
      display: 'flex',
      flexDirection: 'column'
    },
    gapMd: {
      gap: 'var(--space-medium)'
    },
    gapSm: {
      gap: 'var(--space-small)'
    }
  })
  .attach()

function Support(): JSX.Element {
  return (
    <div class={classes.root}>
      <div style={{ padding: 16 }} className={clsx(classes.flexCol, classes.gapMd)}>
        <Text>
          RTLPLZ is focused on make it easy to write in Figma, specially in Right-To-Left or bidirectional text.
        </Text>

        <div className={clsx(classes.flexCol, classes.gapSm)}>
          <Text bold>Single Editor:</Text>
          <Text>
            You can select one or more text layers (or their parents) and then start typing in the Editor tab of the plugin window.<br />
            If you write in Persian or Arabic and mix it with left-to-right characters, RTL PLZ will reshape some of the glyphs to prevent text from broking
          </Text>
        </div>

        <div className={clsx(classes.flexCol, classes.gapSm)}>
          <Text bold>Batch Editor</Text>
          <Text>
            In the Batch Editor tab, you can select many text layers or a frame with text layers.<br />
            Start to edit each text individually, and you can navigate between them with the Tab key. If the text layer is out of the viewport, viewport zoom will change to show the layer.
          </Text>
        </div>

        <div className={clsx(classes.flexCol, classes.gapSm)}>
          <Text bold>Line Wrapping</Text>
          <Text>
            If the plugin window is open and some text layer size is changed, it will automatically rewrap the text. Otherwise, you can select the layer and run the Rewrap command from the plugin menu or use Rewrap button from the right sidebar relaunch buttons.
          </Text>
        </div>

        <div className={clsx(classes.flexCol, classes.gapSm)}>
          <Text>
            You can also use it without opening the UI and reverse, rewrap, reset selected layers from the plugin submenus.
          </Text>
        </div>
      </div>


      <div style={{ position: 'sticky', bottom: 0, zIndex: 1, backgroundColor: '#fff' }}>
        <Divider />
        <div style={{ padding: 16 }}>
          <Text>
            Support me by your feedbacks on <a href="https://git.io/rtlplzissues" target="_blank" rel="noopener noreferrer">git.io/rtlplzissues</a> or <a href="https://twitter.com/saeednitrate" target="_blank" rel="noopener noreferrer">twitter</a>.
          </Text>
          <VerticalSpace space="small" />
          <Text bold style={{fontSize: '0.85rem'}}>
            <a href="https://saeedalipoor.ir/donate" target="_blank" rel="noopener noreferrer">buy me a coffee ☕️</a>
          </Text>
        </div>
      </div>


    </div>
  )
}

export default Support;