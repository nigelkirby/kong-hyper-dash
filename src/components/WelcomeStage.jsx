import { h } from 'hyperapp'
import AddServer from './AddServer.jsx'

export default ({ state, actions }) => (
  <div class="container">
    <h2>Welcome to Kong Hyper Dash</h2>
    {state.loadedUrl ? (
      <div>
        <h4>Welcome, saved connection to {state.loadedUrl}, connect to new server:</h4>
        <AddServer setUrl={actions.setUrl} initKong={actions.initKong} />
      </div>
    ) : (
      <div>
        <h4>No Connections, connect now:</h4>
        <AddServer setUrl={actions.setUrl} initKong={actions.initKong} />
      </div>
    )}
  </div>
)
