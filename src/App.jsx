import { h } from 'hyperapp'
import { Header, ServiceStage } from './components'
import WelcomeStage from './components/WelcomeStage.jsx'
import ConsumerStage from './components/ConsumerStage.jsx'

export default (state, actions) => (
  <div>
    <Header nav={actions.nav} />
    <main>
      {() => {
        switch (state.stageView) {
          case 'services':
            return <ServiceStage state={state} actions={actions} />
          case 'consumers':
            return <ConsumerStage state={state} actions={actions} />
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
