import { h } from 'hyperapp'
import { Header, ServiceStage } from './components'
import WelcomeStage from './components/WelcomeStage.jsx'

export default (state, actions) => (
  <div>
    <Header
      setUrl={actions.setUrl}
      initKong={actions.initKong}
      loadedUrl={state.loadedUrl}
      version={state.version}
    />
    <main>
      {() => {
        switch (state.stageView) {
          case 'service':
            return <ServiceStage state={state} actions={actions} />
          default:
            return <WelcomeStage state={state} actions={actions} />
        }
      }}
    </main>
    <footer class="sticky">
      <p>Footer placeholder</p>
    </footer>
  </div>
)
