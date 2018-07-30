import { h } from 'hyperapp'

export default ({ state }) => (
  <div class="container">
    {state.consumers.map(consumer => (
      <div>
        <h4>{consumer.id}</h4>
        <p>{consumer.name && `Name ${consumer.name}`}</p>
        <p>{consumer.custom_id && `Custom ID ${consumer.custom_id}`}</p>
      </div>
    ))}
  </div>
)
