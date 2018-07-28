import { h } from 'hyperapp'
import { Header, Services } from './components'

export default (state, actions) => (
  <div>
    <Header
      setUrl={actions.setUrl}
      initKong={actions.initKong}
      loadedUrl={state.loadedUrl}
      version={state.version}
    />
    <Services
      services={state.services}
    />
  </div>
)
