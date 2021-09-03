/** @jsx h */

import { render } from '@create-figma-plugin/ui'
import jss from 'jss'
import jssPluginCamelCase from 'jss-plugin-camel-case'
import global from 'jss-plugin-global'
import jssPluginNested from 'jss-plugin-nested'
import preset from 'jss-preset-default'
import { h } from 'preact'
import Resizer from '../../components/Resizer'
import { DataProvider } from '../../dataContext'
import FigmaEventsDispatcher from '../../dataContext/FigmaEventsDispatcher'
import MainView from './MainView'



jss.setup(preset());
jss.use(global(), jssPluginNested(), jssPluginCamelCase())
const { classes } = jss
  .createStyleSheet({
    '@global': {
      '#create-figma-plugin': {
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
      },
      '.ml-auto': {
        marginLeft: 'auto'
      },
      '::placeholder': {
        color: '#B4B4B4'
      },
      '@media (max-width: 140px) and (max-height: 180px)': {
        '.hidden-xs': {
          display: 'none'
        }
      }
    }
  })
  .attach()

function Plugin(data: any) {
  return (
    <DataProvider initial={data}>
      <Resizer />
      <MainView />
      <FigmaEventsDispatcher />
    </DataProvider>
  )
}

export default render(Plugin)