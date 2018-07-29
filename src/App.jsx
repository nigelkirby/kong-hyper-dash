import { h } from 'hyperapp'
import { Header, ServiceStage } from './components'

export default (state, actions) => (
  <div>
    <Header
      setUrl={actions.setUrl}
      initKong={actions.initKong}
      loadedUrl={state.loadedUrl}
      version={state.version}
    />
    <main>
      <ServiceStage state={state} actions={actions}/>
    </main>
    <footer class="sticky">
      <p>Footer placeholder</p>
    </footer>
  </div>
)
