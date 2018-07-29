import { h } from 'hyperapp'
import { formatTimestamp } from '../utils'
import PluginCard from './PluginCard.jsx'
import RouteCard from './RouteCard.jsx'

const parseToUrl = ({
  protocol, host, port, path,
}) => `${protocol}://${host}:${port}${path || ''}`

const makeLink = url => <a href={url}>{url}</a>

export default ({ service }) =>
  service && (
    <div>
      <h2>{service.name || service.id}</h2>
      <p class="small-text">
        <em>{service.id}</em>
        <br />
        URL: {makeLink(parseToUrl(service))}
        <br />
        Created: {formatTimestamp(service.created_at)}
        <br />
        Updated: {formatTimestamp(service.updated_at)}
      </p>
      <h3>Routes</h3>
      <p>
        {service.routes.length > 0 ? (
          service.routes.map(route => <RouteCard {...route} />)
        ) : (
          <span>No Routes</span>
        )}
      </p>
      <h3>Plugins</h3>
      {service.plugins.length > 0 ? (
        service.plugins.map(plugin => <PluginCard {...plugin} />)
      ) : (
        <p>No Plugins</p>
      )}
    </div>
  )
