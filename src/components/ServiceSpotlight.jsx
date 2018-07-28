import { h } from 'hyperapp'

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
        Created: {`${new Date(service.created_at * 1000)}`}
        <br />
        Updated: {`${new Date(service.updated_at * 1000)}`}
      </p>
      <h3>Routes</h3>
      <p>{service.routes.length > 0 ? <p /> : <span>No Routes</span>}</p>
      <h3>Plugins</h3>
      <p>{service.plugins.length > 0 ? <p /> : <span>No Plugins</span>}</p>
    </div>
  )
