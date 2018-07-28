import { h } from 'hyperapp'
import { Header, Services, ServiceSpotlight } from './components'

export default (state, actions) => (
  <div>
    <Header
      setUrl={actions.setUrl}
      initKong={actions.initKong}
      loadedUrl={state.loadedUrl}
      version={state.version}
    />
    <div class="container">
      <div class="row">
        <div class="col-lg-4">
          <Services services={state.services} showService={actions.showService} />
        </div>
        <div class="col-lg-8">
          <ServiceSpotlight service={state.spotlightService} />
        </div>
      </div>
    </div>
    <footer class="sticky">
      <p>Footer placeholder</p>
    </footer>
  </div>
)
