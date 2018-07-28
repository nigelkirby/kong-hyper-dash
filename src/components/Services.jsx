import { h } from 'hyperapp'
import ServiceCard from './ServiceCard.jsx'

export default ({ services, showService }) =>
  services && (
    <div>
      <h4>Services</h4>
      {services.map(service => <ServiceCard service={service} showService={showService}/>)}
    </div>
  )
