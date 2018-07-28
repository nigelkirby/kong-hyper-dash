import { h } from 'hyperapp'
import { Header } from './components'

export default (state, actions) => (
  <div>
    <Header setUrl={actions.setUrl} initKong={actions.initKong} />
    {state.info && `Kong loaded v${state.info.version}`}
  </div>
)
