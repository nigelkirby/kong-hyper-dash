import { h } from 'hyperapp'
import { prettyString, formatTimestamp } from '../utils'

export default ({
  name, id, enabled, config, created_at: created,
}) => (
  <div class="card fluid">
    <div class="section">
      <h4>
        {name} - {enabled ? 'enabled' : 'disabled'}
      </h4>
      <p class="small-text">
        <em>{id}</em>
        <br />
        Created: {formatTimestamp(created)}
        <pre>{prettyString(config)}</pre>
      </p>
    </div>
  </div>
)
