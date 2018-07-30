import { h } from 'hyperapp'
import AddServer from './AddServer.jsx'
import ServerCard from './ServerCard.jsx'

export default ({ state, actions }) => {
  const savedServers = Object.entries(state.servers).map((url, details) =>
    Object.assign({ url }, details))
  return (
    <div class="container">
      <h2>Welcome to Kong Hyper Dash</h2>
      {savedServers.length > 0 ? (
        <div>
          <h4>Connect to a server:</h4>
          <AddServer set={actions.set} connect={actions.connect} />
          <h4>Reconnect to saved server:</h4>
          {Object.keys(state.servers).map(url => (
            <ServerCard url={url} {...actions}/>
          ))}
        </div>
      ) : (
        <div>
          <h4>No connections, connect now:</h4>
          <AddServer set={actions.set} connect={actions.connect} />
        </div>
      )}
    </div>
  )
}
