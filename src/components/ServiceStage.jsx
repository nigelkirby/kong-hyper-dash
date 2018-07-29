import { h } from 'hyperapp'
import Services from './Services.jsx'
import ServiceSpotlight from './ServiceSpotlight.jsx'

export default ({ state, actions }) => (
  <div class="container">
    <div class="row">
      <div class="col-lg-4">
        <Services services={state.services} showService={actions.showService} />
      </div>
      <div class="col-lg-4">
        <ServiceSpotlight service={state.spotlightService} />
      </div>
    </div>
  </div>
)
