import { h } from 'hyperapp'
import { prettyString, formatTimestamp } from '../utils'

export default route => (
  <div class="card fluid">
    <div class="section">
      <h4>{route.id}</h4>
      <p class="small-text">
        <br />
        Created: {formatTimestamp(route.created_at)}
        <pre>{prettyString(route)}</pre>
      </p>
    </div>
  </div>
)
