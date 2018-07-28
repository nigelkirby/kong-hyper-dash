import { h } from 'hyperapp'

const parseToUrl = ({
  protocol, host, port, path,
}) =>
  `${protocol}://${host}:${port}${path || ''}`

export default ({ services }) =>
  services && (
    <div>
      <h4>Services</h4>
      <ul>
        {services.map(service => (
          <li>
            {service.name} - {parseToUrl(service)}
          </li>
        ))}
      </ul>
    </div>
  )
