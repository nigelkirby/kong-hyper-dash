import { h } from 'hyperapp'
import { Header, ServiceStage } from './components'
import WelcomeStage from './components/WelcomeStage.jsx'

export default (state, actions) => (
  <div>
    <Header nav={actions.nav} />
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
      {state.loadedUrl && `Connected to Kong server v${state.version} at ${state.loadedUrl}`}
    </footer>
  </div>
)
