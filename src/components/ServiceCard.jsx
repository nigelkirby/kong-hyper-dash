import { h } from 'hyperapp'

const parseToUrl = ({
  protocol, host, port, path,
}) => `${protocol}://${host}:${port}${path || ''}`

const makeLink = url => <a href={url}>{url}</a>

export default ({ service, showService }) =>
  service && (
    <div class="card fluid" onclick={() => showService(service.id)}>
      <div class="section">
        <h4>{service.name || service.id}</h4>
        <p class="small-text">{makeLink(parseToUrl(service))}</p>
      </div>
    </div>
  )
